const TennisGame2 = function (player1Name, player2Name) {
    let P1point = 0;
    let P2point = 0;
    let P1res = 0;
    let P2res = 0;

    const getScore = function () {
        let score;
        if (P1point == P2point && P1point < 4) {
            if (P1point == 0)
                score = "Love";
            if (P1point == 1)
                score = "Fifteen";
            if (P1point == 2)
                score = "Thirty";
            if (P1point == 3)
                score = "Forty";
            score += "-All";
        }
        if (P1point == P2point && P1point > 3)
            score = "Deuce";

        if (P1point > 0 && P2point == 0) {
            if (P1point == 1)
                P1res = "Fifteen";
            if (P1point == 2)
                P1res = "Thirty";
            if (P1point == 3)
                P1res = "Forty";

            P2res = "Love";
            score = P1res + "-" + P2res;
        }
        if (P2point > 0 && P1point == 0) {
            if (P2point == 1)
                P2res = "Fifteen";
            if (P2point == 2)
                P2res = "Thirty";
            if (P2point == 3)
                P2res = "Forty";

            P1res = "Love";
            score = P1res + "-" + P2res;
        }

        if (P1point > P2point && P1point < 4) {
            if (P1point == 2)
                P1res = "Thirty";
            if (P1point == 3)
                P1res = "Forty";
            if (P2point == 1)
                P2res = "Fifteen";
            if (P2point == 2)
                P2res = "Thirty";
            score = P1res + "-" + P2res;
        }
        if (P2point > P1point && P2point < 4) {
            if (P2point == 2)
                P2res = "Thirty";
            if (P2point == 3)
                P2res = "Forty";
            if (P1point == 1)
                P1res = "Fifteen";
            if (P1point == 2)
                P1res = "Thirty";
            score = P1res + "-" + P2res;
        }

        if (P1point > P2point && P2point >= 3) {
            score = `Advantage ${player1Name}`;
        }

        if (P2point > P1point && P1point >= 3) {
            score = `Advantage ${player2Name}`;
        }

        if (P1point >= 4 && P2point >= 0 && (P1point - P2point) >= 2) {
            score = `Win for ${player1Name}`;
        }
        if (P2point >= 4 && P1point >= 0 && (P2point - P1point) >= 2) {
            score = `Win for ${player2Name}`;
        }
        return score;
    }

    const SetP1Score = function (number) {
        for (let i = 0; i < number; i++) {
            P1Score();
        }
    }

    const SetP2Score = function (number) {
        for (let i = 0; i < number; i++) {
            P1Score();
        }
    }

    const P1Score = function () {
        P1point++;
    }

    const P2Score = function () {
        P2point++;
    }

    const wonPoint = function (player) {
        if (player == "player1")
            P1Score();
        else
            P2Score();
    }

    return {
        getScore,
        SetP1Score,
        SetP2Score,
        wonPoint
    }
}

module.exports = TennisGame2;
