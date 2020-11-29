
export default class TennisGame3 {
    p2 = 0;
    p1 = 0;
    p1N = '';
    p2N = '';

    TennisGame3(p1N, p2N) {
        this.p1N = p1N;
        this.p2N = p2N;
    }

    getScore() {
        let s;
        let p1 = this.p1;
        let p2 = this.p2;
        
        if (p1 < 4 && p2 < 4) {
            let p = ["Love", "Fifteen", "Thirty", "Forty"]; 
            s = p[p1];
            return (p1 === p2) ? s + "-All" : s + "-" + p[p2];
        } else {
            if (p1 === p2)
                return "Deuce";
            s = p1 > p2 ? p1N : p2N;
            return ((p1-p2)*(p1-p2) == 1) ? "Advantage " + s : "Win for " + s;
        }
    }
    
    wonPoint(playerName) {
        if (playerName === "player1")
            this.p1 += 1;
        else
            this.p2 += 1;
    }

}
