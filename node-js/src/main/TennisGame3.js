const TENNIS_SCORES = ["Love", "Fifteen", "Thirty", "Forty"];

class TennisGame3 {
    constructor(p1N, p2N) {
        this.player1Name = p1N;
        this.player2Name = p2N;

        this.player1Points = 0;
        this.player2Points = 0;
    }

    getScore() {
        if (this.tied()) return this.tiedScore();
        if (this.neitherPlayerHasWon()) return this.runningScore();
        if (this.deuce()) return "Deuce";
        if (this.aPlayerHasTheAdvantage()) return this.advantageScore();
        return this.winningScore();
    }

    winningScore() {
        return `Win for ${this.playerInLead()}`;
    }

    advantageScore() {
        return `Advantage ${this.playerInLead()}`;
    }

    deuce() {
        return this.player1Points === this.player2Points && this.player1Points >= 3;
    }

    playerInLead() {
        return this.player1Points > this.player2Points ? this.player1Name : this.player2Name;
    }

    aPlayerHasTheAdvantage() {
        return (this.player1Points - this.player2Points) * (this.player1Points - this.player2Points) == 1;
    }

    runningScore() {
        return TENNIS_SCORES[this.player1Points] + "-" + TENNIS_SCORES[this.player2Points];
    }

    tiedScore() {
        return TENNIS_SCORES[this.player1Points] + "-All";
    }

    tied() {
        return this.player1Points == this.player2Points && this.player1Points < 4;
    }

    neitherPlayerHasWon() {
        return this.player1Points < 4 && this.player2Points < 4;
    }

    wonPoint(playerName) {
        if (playerName == "player1")
            this.player1Points += 1;
        else
            this.player2Points += 1;
    }
}

module.exports = TennisGame3;
