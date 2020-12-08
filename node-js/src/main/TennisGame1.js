class TennisGame1 {
    constructor(player1Name, player2Name) {
        this.player1Name = player1Name;
        this.player2Name = player2Name;

        this.player1Score = 0;
        this.player2Score = 0;
    }

    wonPoint(playerName) {
        if (playerName == "player1")
            this.player1Score += 1;
        else
            this.player2Score += 1;
    }

    getScore() {
        if (this.tied()) {
            return this.tiedScore();
        }
        if (this.tiebreaking()) {
            return this.tiebreakingScore();
        }
        return this.runningScore();
    }

    runningScore() {
        let tempScore = 0;
        let score = '';
        for (let i = 1; i < 3; i++) {
            if (i === 1)
                tempScore = this.player1Score;
            else { score += "-"; tempScore = this.player2Score; }
            switch (tempScore) {
                case 0:
                    score += "Love";
                    break;
                case 1:
                    score += "Fifteen";
                    break;
                case 2:
                    score += "Thirty";
                    break;
                case 3:
                    score += "Forty";
                    break;
            }
        }
        return score;
    }

    tiebreakingScore() {
        let minusResult = this.player1Score - this.player2Score;
        if (minusResult === 1)
            return `Advantage ${this.player1Name}`;
        else if (minusResult === -1)
            return `Advantage ${this.player2Name}`;
        else if (minusResult >= 2)
            return `Win for ${this.player1Name}`;
        else
            return `Win for ${this.player2Name}`;
    }

    tiebreaking() {
        return this.player1Score >= 4 || this.player2Score >= 4;
    }

    tiedScore() {
        switch (this.player1Score) {
            case 0:
                return "Love-All";
            case 1:
                return "Fifteen-All";
            case 2:
                return "Thirty-All";
            case 3:
                return "Forty-All";
            default:
                return "Deuce";
        }
    }

    tied() {
        return this.player1Score === this.player2Score;
    }
}

module.exports =  TennisGame1;
