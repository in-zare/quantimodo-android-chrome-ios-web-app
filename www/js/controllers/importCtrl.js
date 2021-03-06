angular.module('starter').controller('ImportCtrl', function($scope, $ionicLoading, $state, $rootScope, quantimodoService) {
	$scope.controller_name = "ImportCtrl";
	$rootScope.showFilterBarSearchIcon = false;
	$scope.$on('$ionicView.beforeEnter', function(e) {
		console.debug("ImportCtrl beforeEnter");
		if (typeof Bugsnag !== "undefined") { Bugsnag.context = $state.current.name; }
		if (typeof analytics !== 'undefined')  { analytics.trackView($state.current.name); }
		if(!$rootScope.user){
			console.debug('Setting afterLoginGoToState to ' + $state.current.name);
			quantimodoService.setLocalStorageItem('afterLoginGoToState', $state.current.name);
			$state.go('app.login');
			return;
		}
		if($rootScope.user.stripeActive || config.appSettings.upgradeDisabled){
			loadNativeConnectorPage();
			return;
		}
		// Check if user upgrade via web since last user refresh
		$ionicLoading.show();
		quantimodoService.refreshUser().then(function (user) {
			$ionicLoading.hide();
			if(user.stripeActive || config.appSettings.upgradeDisabled){
				loadNativeConnectorPage();
				return;
			}
			$state.go('app.upgrade', {litePlanState: config.appSettings.defaultState});
		}, function (error) {
			$ionicLoading.hide();
			$state.go('app.login');
		});
	});
	$scope.hideImportHelpCard = function () {
		$scope.showImportHelpCard = false;
		window.localStorage.hideImportHelpCard = true;
	};
	var goToWebImportDataPage = function() {
		console.debug('importCtrl.init: Going to quantimodoService.getAccessTokenFromAnySource');
		$state.go(config.appSettings.defaultState);
		quantimodoService.getAccessTokenFromAnySource().then(function(accessToken){
			$ionicLoading.hide();
			if(ionic.Platform.platforms[0] === "browser"){
				console.debug("Browser Detected");

				var url = quantimodoService.getQuantiModoUrl("api/v2/account/connectors", true);
				if(accessToken){
					url += "access_token=" + accessToken;
				}
				var newTab = window.open(url,'_blank');

				if(!newTab){
					alert("Please unblock popups and refresh to access the Import Data page.");
				}
				$rootScope.hideNavigationMenu = false;
				//noinspection JSCheckFunctionSignatures
				$state.go(config.appSettings.defaultState);
			} else {
				var targetUrl = quantimodoService.getQuantiModoUrl("api/v1/connect/mobile", true);
				if(accessToken){
					targetUrl += "access_token=" + accessToken;
				}
				var ref = window.open(targetUrl,'_blank', 'location=no,toolbar=yes');
				ref.addEventListener('exit', function(){
					$rootScope.hideNavigationMenu = false;
					//noinspection JSCheckFunctionSignatures
					$state.go(config.appSettings.defaultState);
				});
			}
		}, function(){
			$ionicLoading.hide();
			console.debug('importCtrl: Could not get getAccessTokenFromAnySource.  Going to login page...');
            quantimodoService.sendToLogin(true);
		});
	};
	var loadNativeConnectorPage = function(){
		$scope.showImportHelpCard = (window.localStorage.hideImportHelpCard !== "true");
		console.debug('importCtrl: $rootScope.isMobile so using native connector page');
		$ionicLoading.show();
		quantimodoService.getConnectorsDeferred()
			.then(function(connectors){
				$rootScope.connectors = connectors;
				if(connectors) {
					//Stop the ion-refresher from spinning
					$scope.$broadcast('scroll.refreshComplete');
					$ionicLoading.hide().then(function(){console.debug("The loading indicator is now hidden");});
				}
				$scope.refreshConnectors();
			});
	};
});
