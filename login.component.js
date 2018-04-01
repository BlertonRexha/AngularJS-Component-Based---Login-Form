(function () {
    'use strict';
        angular.module('myApp',[])

        .component('loginForm',{
            template:`
                    <div class="parenti">
                    <form novalidate>
                        <div class="container">

                                <div class="row1">
                                    <img src="development.ico" class="icon" alt="Icon of hotel key">
                                    <h3> Github </h3>
                                </div>

                                <div class="row2">
                                    <input type="text" class="username" placeholder="Username">
                                    <!--myForm.$error.email = {{!!myForm.$error.email}}-->
                                    <input type="password" class="password" placeholder="Password">
                                    <button type="button" class="submit" onclick='login();'>Login</button>
                                </div>
                                <div class="last_row">
                                    <p>Do you have account <a href="">Create Account</a></p>
                                </div>

                        </div>
                    </form>
                </div>
                `,
                controller: mainController,
                controllerAs: 'vm',
                bindings: {}
        });

            mainController.$inject = ['$log'];

            function mainController($log) {
                var vm = this;

                function login() {
                    $log.debug('alsjdlaksjdlk');
                }
            }
})();
