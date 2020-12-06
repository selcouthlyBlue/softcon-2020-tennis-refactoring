const TennisGame3 = function (p1N, p2N) {
    let p1 = 0;
    let p2 = 0;

    const getScore = function () {
        let s;
        if (p1 < 4 && p2 < 4) {
            const p = ["Love", "Fifteen", "Thirty", "Forty"];
            s = p[p1];
            return (p1 == p2) ? s + "-All" : s + "-" + p[p2];
        } else {
            if (p1 == p2)
                return "Deuce";
            s = p1 > p2 ? p1N : p2N;
            return ((p1 - p2) * (p1 - p2) == 1) ? "Advantage " + s : "Win for " + s;
        }
    }

    const wonPoint = function (playerName) {
        if (playerName == "player1")
            p1 += 1;
        else
            p2 += 1;
    }

    return {
        getScore,
        wonPoint
    }
}

module.exports = TennisGame3;
