export class WordCount {
    
  heading = 'Counting words';
  lineReader = '';
  words = [];
  totalWords = 0;
  hasWords = this.totalWords > 0;   

  sortWords() {
        this.words = [];
        var char_count = this.lineReader.length;
        var fullStr = this.lineReader + " ";
        var initial_whitespace_rExp = /^[^A-Za-z0-9]+/gi;
        var left_trimmedStr = fullStr.replace(initial_whitespace_rExp, "");
        var non_alphanumerics_rExp = /[^A-Za-z0-9]+/gi;
        var cleanedStr = left_trimmedStr.replace(non_alphanumerics_rExp, " ");
        var splitString = cleanedStr.split(" ");
        splitString.sort();
        
        this.totalWords = splitString.length -1;
        this.hasWords = this.totalWords > 0;
      
        splitString.forEach(v => {
            var exists = false;
            this.words.forEach(w => {
               if(v === w.word){
                   w.count = w.count + 1;
                   exists = true;
               }  
            });
            
            if(!exists && v != ""){
                this.words.push({ 'word' : v, 'count' : 1});
            }
        });
    }

}
