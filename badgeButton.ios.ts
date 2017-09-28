import { Button } from 'ui/button';

declare var UIBarButtonItem: any;

export class BadgeButton extends Button {

    private _iosBadgeButton: any;
    private _lastBadgeOriginX: number = 0;

    constructor() {
        super();
        this._iosBadgeButton = UIBarButtonItem.alloc().initWithCustomView(this.ios);
        /*
        Default Values
            badgeBGColor = redColor
            badgeTextColor = whiteColor
            badgeFont = systemFontOfSize:12.0
            badgePadding = 6
            badgeMinSize = 8
            badgeOriginX = 0
            badgeOriginY = -4
            shouldHideBadgeAtZero = true
            shouldAnimateBadge = true
        */
    }

    get nativeiOSBadgeButton() {
        return this._iosBadgeButton;
    }

    set badgeValue(badgeValue: string) {
        this._iosBadgeButton.badgeValue = badgeValue.toString();
        if (this._lastBadgeOriginX) {
            this._iosBadgeButton.badgeOriginX = this._lastBadgeOriginX;
        }
    }

    set badgeBGColor(badgeBGColor: any) {
        this._iosBadgeButton.badgeBGColor = badgeBGColor.ios;
    }

    set badgeTextColor(badgeTextColor: any) {
        this._iosBadgeButton.badgeTextColor = badgeTextColor.ios;
    }

    set badgeFont(badgeFont: any) {
        this._iosBadgeButton.badgeFont = badgeFont;
    }

    set badgePadding(badgePadding: number) {
        this._iosBadgeButton.badgePadding = badgePadding;
    }

    set badgeMinSize(badgeMinSize: number) {
        this._iosBadgeButton.badgeMinSize = badgeMinSize;
    }

    set badgeOriginX(badgeOriginX: number) {
        this._iosBadgeButton.badgeOriginX = badgeOriginX;
        this._lastBadgeOriginX = badgeOriginX;
    }

    set badgeOriginY(badgeOriginY: number) {
        this._iosBadgeButton.badgeOriginY = badgeOriginY;
    }

    set shouldHideBadgeAtZero(shouldHideBadgeAtZero: boolean) {
        this._iosBadgeButton.shouldHideBadgeAtZero = shouldHideBadgeAtZero;
    }

    set shouldAnimateBadge(shouldAnimateBadge: boolean) {
        this._iosBadgeButton.shouldAnimatebadge = shouldAnimateBadge;
    }

}
