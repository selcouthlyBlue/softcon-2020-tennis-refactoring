class TennisGame2 {
    constructor(player1Name, player2Name) {
        this.player1Name = player1Name;
        this.player2Name = player2Name;

        this.P1point = 0;
        this.P2point = 0;
    }

    getScore() {
        if (this.tied()) return this.tiedScore();
        if (this.deuce()) return "Deuce";
        if (this.aPlayerWon()) return this.winningScore();
        if (this.aPlayerHasTheAdvantage()) return this.advantageScore();
        return this.runningScore();
    }

    aPlayerHasTheAdvantage() {
        return this.player1HasAdvantage() || this.player2HasAdvantage();
    }

    advantageScore() {
        if (this.player1HasAdvantage()) {
            return `Advantage ${this.player1Name}`;
        }

        if (this.player2HasAdvantage()) {
            return `Advantage ${this.player2Name}`;
        }
    }

    player2HasAdvantage() {
        return this.onePlayerHasTheAdvantage(this.P2point, this.P1point);
    }

    player1HasAdvantage() {
        return this.onePlayerHasTheAdvantage(this.P1point, this.P2point);
    }

    onePlayerHasTheAdvantage(advantageScore, trailingScore) {
        return advantageScore > trailingScore && trailingScore >= 3;
    }

    aPlayerWon() {
        return this.player1Wins() || this.player2Wins();
    }

    winningScore() {
        if (this.player1Wins()) {
            return `Win for ${this.player1Name}`;
        }
        if (this.player2Wins()) {
            return `Win for ${this.player2Name}`;
        }
    }

    player2Wins() {
        return this.onePlayerWon(this.P2point, this.P1point);
    }

    player1Wins() {
        return this.onePlayerWon(this.P1point, this.P2point);
    }

    onePlayerWon(winningScore, losingScore) {
        return winningScore >= 4 && losingScore >= 0 && (winningScore - losingScore) >= 2;
    }

    runningScore() {
        const scores = ["Love", "Fifteen", "Thirty", "Forty"];
        return scores[this.P1point] + "-" + scores[this.P2point];
    }

    deuce() {
        return this.P1point == this.P2point && this.P1point > 3;
    }

    tiedScore() {
        if (this.P1point == 0)
            return "Love-All";
        if (this.P1point == 1)
            return "Fifteen-All";
        if (this.P1point == 2)
            return "Thirty-All";
        if (this.P1point == 3)
            return "Forty-All";
    }

    tied() {
        return this.P1point == this.P2point && this.P1point < 4;
    }

    wonPoint(player) {
        if (player == "player1")
            this.P1point++;
        else
            this.P2point++;
    }
}

module.exports = TennisGame2;
