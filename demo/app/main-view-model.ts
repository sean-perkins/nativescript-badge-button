import {Observable} from 'data/observable';
import {isIOS, isAndroid} from 'platform';
import {Color} from 'color';
import {Purple, Green, Yellow} from 'color/known-colors';
import {BadgeButton} from 'nativescript-badge-button';

export class HelloWorldModel extends Observable {

    public badgeIncrement: string = "1";

    constructor() {
        super();
        this.incrementBadge();
    }

    incrementBadge() {
        let count: number = 1;
        setInterval(() => {
            count++;
            this.set('badgeIncrement', count++);
        }, 1000);
    }

    get purpleColor(): any {
        return new Color(Purple);
    }

    get greenColor(): any {
        return new Color(Green);
    }

    get yellowColor(): any {
        return new Color(Yellow);
    }

}