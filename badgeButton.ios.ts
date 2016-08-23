import { Button } from 'ui/button';

declare var BBBadgeBarButtonItem: any;

export class BadgeButton extends Button {

    private _ios: any;

    constructor() {
        super();
    }

    _createUI() {
        // this._ios = new BBBadgeBarButtonItem(new WeakRef(this));
        // this._ios.badgeValue = "1";
    }

    get ios() {
        return this._ios;
    }

    get _nativeView() {
        return this._ios.view;
    }

}