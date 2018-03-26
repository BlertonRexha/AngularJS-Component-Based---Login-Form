(function () {
    'use strict';
        angular.module('myApp',[])

        .component('loginForm',{
            template:`
                    <div class="parenti">
                    <form action="" novalidate>
                        <div class="container">

                                <div class="row1">
                                    <img src="development.ico" class="icon" alt="Icon of hotel key">
                                    <h3> Github </h3>
                                </div>

                                <div class="row2">
                                    <input type="text" class="username" placeholder="Username">
                                    <input type="password" class="password" placeholder="password">
                                    <button type="button" class="submit">Login</button>
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
                var vm = this;}
})();
