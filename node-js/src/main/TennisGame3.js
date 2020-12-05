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
        if (this.p1 < 4 && this.p2 < 4) {
            const p = ["Love", "Fifteen", "Thirty", "Forty"];
            s = p[this.p1];
            return this.p1 == this.p2 ? `${s}-All` : `${s}-${p[this.p2]}`;
        } else {
            if (this.p1 == this.p2)
                return "Deuce";
            s = this.p1 > this.p2 ? "player1" : "player2";
            return ((this.p1 - this.p2) * (this.p1 - this.p2) == 1) ? `Advantage ${s}` : `Win for ${s}`; 
        }
    }

    wonPoint(playerName) {
        if(playerName == "player1")
            this.p1 += 1;
        else
            this.p2 += 1;
    }

}
