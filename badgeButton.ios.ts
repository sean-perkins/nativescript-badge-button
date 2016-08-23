import { Button } from 'ui/button';

declare var BBBadgeBarButtonItem: any;

export class BadgeButton extends Button {

    private _iosBadgeButton: any;

    constructor() {
        super();
        this._iosBadgeButton = BBBadgeBarButtonItem.alloc().initWithCustomUIButton(this.ios);
        /*
        Default Values
            badgeBGColor = redColor
            badgeTextColor = whiteColor
            badgeFont = systemFontOfSize:12.0
            badgePadding = 6
            badgeMinSize = 8
            badgeOriginX = 7
            badgeOriginY = -9
            shouldHideBadgeAtZero = true
            shouldAnimateBadge = true
            clipToBounds = false
        */
    }

    get nativeiOSBadgeButton() {
        return this._iosBadgeButton;
    }

    set badgeValue(badgeValue: string) {
        this._iosBadgeButton.badgeValue = badgeValue.toString();
    }

    set badgeBGColor(badgeBGColor: UIColor) {
        this._iosBadgeButton.badgeBGColor = badgeBGColor;
    }

    set badgeTextColor(badgeTextColor: UIColor) {
        this._iosBadgeButton.badgeTextColor = badgeTextColor;
    }

    set badgeFont(badgeFont: UIFont) {
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