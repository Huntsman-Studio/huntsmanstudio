"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MainComponent = void 0;
var core_1 = require("@angular/core");
var MainComponent = /** @class */ (function () {
    function MainComponent(_meta, _title) {
        this._meta = _meta;
        this._title = _title;
        this.anio = new Date().getFullYear();
        // Set meta to page
        this._meta.addTags([
            { name: 'description', content: 'Home page of HuntsmanStudio' },
            { name: 'author', content: 'Developers department of HuntsmanStudio' },
            { name: 'keywords', content: 'Apps, Websites, Branding, Marketing' }
        ]);
        this.setTitle('Home');
    }
    // Set page title
    MainComponent.prototype.setTitle = function (title) {
        this._title.setTitle(title + " | Huntsman Studio");
    };
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent.prototype.goTo = function (link) {
        window.open(link, "_blank");
    };
    MainComponent = __decorate([
        core_1.Component({
            selector: 'app-main',
            templateUrl: './main.component.html',
            styleUrls: ['./main.component.scss']
        })
    ], MainComponent);
    return MainComponent;
}());
exports.MainComponent = MainComponent;
