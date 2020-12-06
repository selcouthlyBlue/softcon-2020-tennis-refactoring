const TennisGame1 = function(player1Name, player2Name) {
    let m_score1 = 0;
    let m_score2 = 0;

    const wonPoint = function(playerName) {
        if (playerName == "player1")
            m_score1 += 1;
        else
            m_score2 += 1;
    }

    const getScore = function() {
        let score = "";
        let tempScore = 0;
        if (m_score1 === m_score2) {
            switch (m_score1) {
                case 0:
                    score = "Love-All";
                    break;
                case 1:
                    score = "Fifteen-All";
                    break;
                case 2:
                    score = "Thirty-All";
                    break;
                case 3:
                    score = "Forty-All";
                    break;
                default:
                    score = "Deuce";
                    break;
            }
        }
        else if (m_score1 >= 4 || m_score2 >= 4) {
            let minusResult = m_score1 - m_score2;
            if (minusResult === 1) score = `Advantage ${player1Name}`;
            else if (minusResult === -1) score = `Advantage ${player2Name}`;
            else if (minusResult >= 2) score = `Win for ${player1Name}`;
            else score = `Win for ${player2Name}`;
        }
        else {
            for (let i = 1; i < 3; i++) {
                if (i === 1) tempScore = m_score1;
                else { score += "-"; tempScore = m_score2; }
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
        }
        return score;
    }

    return {
        getScore,
        wonPoint
    }
}

module.exports =  TennisGame1;
