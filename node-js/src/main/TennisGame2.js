class TennisGame2 {
    constructor(player1Name, player2Name) {
        this.player1Name = player1Name;
        this.player2Name = player2Name;

        this.P1point = 0;
        this.P2point = 0;
        this.P1res = "";
        this.P2res = "";
    }

    getScore() {
        let score;
        if (this.P1point == this.P2point && this.P1point < 4) {
            if (this.P1point == 0)
                score = "Love";
            if (this.P1point == 1)
                score = "Fifteen";
            if (this.P1point == 2)
                score = "Thirty";
            if (this.P1point == 3)
                score = "Forty";
            score += "-All";
        }
        if (this.P1point == this.P2point && this.P1point > 3)
            score = "Deuce";

        if (this.P1point > 0 && this.P2point == 0) {
            if (this.P1point == 1)
                this.P1res = "Fifteen";
            if (this.P1point == 2)
                this.P1res = "Thirty";
            if (this.P1point == 3)
                this.P1res = "Forty";

            this.P2res = "Love";
            score = this.P1res + "-" + this.P2res;
        }
        if (this.P2point > 0 && this.P1point == 0) {
            if (this.P2point == 1)
                this.P2res = "Fifteen";
            if (this.P2point == 2)
                this.P2res = "Thirty";
            if (this.P2point == 3)
                this.P2res = "Forty";

            this.P1res = "Love";
            score = this.P1res + "-" + this.P2res;
        }

        if (this.P1point > this.P2point && this.P1point < 4) {
            if (this.P1point == 2)
                this.P1res = "Thirty";
            if (this.P1point == 3)
                this.P1res = "Forty";
            if (this.P2point == 1)
                this.P2res = "Fifteen";
            if (this.P2point == 2)
                this.P2res = "Thirty";
            score = this.P1res + "-" + this.P2res;
        }
        if (this.P2point > this.P1point && this.P2point < 4) {
            if (this.P2point == 2)
                this.P2res = "Thirty";
            if (this.P2point == 3)
                this.P2res = "Forty";
            if (this.P1point == 1)
                this.P1res = "Fifteen";
            if (this.P1point == 2)
                this.P1res = "Thirty";
            score = this.P1res + "-" + this.P2res;
        }

        if (this.P1point > this.P2point && this.P2point >= 3) {
            score = `Advantage ${this.player1Name}`;
        }

        if (this.P2point > this.P1point && this.P1point >= 3) {
            score = `Advantage ${this.player2Name}`;
        }

        if (this.P1point >= 4 && this.P2point >= 0 && (this.P1point - this.P2point) >= 2) {
            score = `Win for ${this.player1Name}`;
        }
        if (this.P2point >= 4 && this.P1point >= 0 && (this.P2point - this.P1point) >= 2) {
            score = `Win for ${this.player2Name}`;
        }
        return score;
    }

    SetP1Score(number) {
        for (let i = 0; i < number; i++) {
            this.P1Score();
        }
    }

    SetP2Score(number) {
        for (let i = 0; i < number; i++) {
            this.P1Score();
        }
    }

    P1Score() {
        this.P1point++;
    }

    P2Score() {
        this.P2point++;
    }

    wonPoint(player) {
        if (player == "player1")
            this.P1Score();
        else
            this.P2Score();
    }
}

module.exports = TennisGame2;
