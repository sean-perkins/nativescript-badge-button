import { Button } from 'ui/button';
export declare class BadgeButton extends Button {
    private _iosBadgeButton;
    constructor();
    nativeiOSBadgeButton: any;
    badgeValue: string;
    badgeBGColor: UIColor;
    badgeTextColor: UIColor;
    badgeFont: UIFont;
    badgePadding: number;
    badgeMinSize: number;
    badgeOriginX: number;
    badgeOriginY: number;
    shouldHideBadgeAtZero: boolean;
    shouldAnimateBadge: boolean;
}
