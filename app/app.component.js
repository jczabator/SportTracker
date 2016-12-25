"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var workout_detail_component_1 = require('./component/workout-detail.component');
var workout_service_1 = require('./service/workout-service');
var AppComponent = (function () {
    function AppComponent(workoutService) {
        this.workoutService = workoutService;
        this.title = 'Sport Tracker';
        this.sectionTitle = "Workouts";
    }
    AppComponent.prototype.onSelect = function (workout) {
        this.selectedWorkout = workout;
    };
    ;
    AppComponent.prototype.getWorkouts = function () {
        var _this = this;
        this.workoutService.getWorkouts().then(function (workouts) { return _this.workouts = workouts; });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getWorkouts();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: "app/template/app.component.html",
            styleUrls: ["app/style/app.component.css"],
            directives: [workout_detail_component_1.WorkoutDetailComponent],
            providers: [workout_service_1.WorkoutService]
        }), 
        __metadata('design:paramtypes', [workout_service_1.WorkoutService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map