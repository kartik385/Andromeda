import { FormControl, ValidationErrors } from '@angular/forms';

export class Validator {

    static whiteSpaceError(control:FormControl):ValidationErrors{

        if((control.value!=null) && (control.value.trim().length<2)){
            return {'whiteSpaceError':true}
        }
        else{
            return null;
        }
    }
}
