import { HttpHeaders } from "@angular/common/http";

export class GlobalVariable {

   static headerJson() {
        return new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': `*/*`,
        });
    }
  
    static headerText() {
        return new HttpHeaders({
            'Content-Type': 'application/text',
            'Accept': `*/*`,
        });
    }
}
