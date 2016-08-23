import { Button } from 'ui/button';
export declare class BadgeButton extends Button {
    private _iosBadgeButton;
    private _lastBadgeOriginX;
    constructor();
    nativeiOSBadgeButton: any;
    badgeValue: string;
    badgeBGColor: any;
    badgeTextColor: any;
    badgeFont: UIFont;
    badgePadding: number;
    badgeMinSize: number;
    badgeOriginX: number;
    badgeOriginY: number;
    shouldHideBadgeAtZero: boolean;
    shouldAnimateBadge: boolean;
}
