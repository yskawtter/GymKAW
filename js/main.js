import { effectHeader } from './jsfix.js'
import { MobileNavbar } from './jsfix.js'
import { verifiquedIMC } from './imc.js'
import { verifySubscribe } from './contact.js'


//ANIMATION - PLUGIN - ORIGAMID
if (window.SimpleAnime) {
    new SimpleAnime()
}

effectHeader // EFEITO HEADER 
MobileNavbar // EFEITO MOBILE
verifiquedIMC // VERIFICAR IMC
verifySubscribe //VERIFICAR A INSCRIÇÃO

