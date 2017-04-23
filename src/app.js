const AnswersResources = require('./resources.js');

exports.matcher = (request) => {    
    switch (request) {
        case "24":
            return AnswersResources.InfoAboutDate24;
            
        case "25":
            return AnswersResources.InfoAboutDate25;
            
        case "26":
            return AnswersResources.InfoAboutDate26;

        case "27":
            return AnswersResources.InfoAboutDate27;

        case "28":
            return AnswersResources.InfoAboutDate28;

        case "29":
            return AnswersResources.InfoAboutDate29;

        default:        
            return AnswersResources.InfoAboutNotDate;
    }    
}