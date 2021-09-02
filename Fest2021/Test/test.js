const participationCodeService = require("../services/ParticipationService/participationCode.service");



(function testHash (){const hash = participationCodeService.generateParticipationCode("labnan33@test.com");
console.log(hash.toString(16));
console.log(hash);})();
