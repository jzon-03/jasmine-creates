import { Component, OnInit } from '@angular/core';
import { SEOService } from '../../services/s-e-o.service';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrl: './media.component.css'
})
export class MediaComponent {

  constructor(
    private _seoService: SEOService
  ){
    this._seoService.updateOGImage("https://lh3.googleusercontent.com/pw/ABLVV858rLxNcKuDfX1xkQyxFJpowm56C_o7P6ZTb0rDRIxf3ZIDf99xGlQqPNb9bLPbi2StSL5wfBNdFH5XQ9WmFgL2-uoQq4Ai9TkikRjBmaboLcoZz7d0oo3ILPfOD-9_AVL5Vnuhwj9qDH09fh8XtGx048N2u9ND4FNt-rWvw8HlSKnbOMaFojxt1qY2ZwVPghoUL64v3dUX9AglercsP9PSqWpRrYhAkSVqMUuyBTE_TJz__miO2nOitpW3m272t-5hfi7CF7xKNcv5ZaGfQAYd0JL1SuLXMlOCS6mBPbf-Iou-TDdqRVoQtXbOzQVnvCKmwfgM6v9gzPXsT0fd82aq97tvtdf_h9FoIZzTtbc-2jwL-KuYivcMcEWHabHAfGie_ALnyOGCRZza-V2gLMtcqXQJd6wm0lI4dqg9ioaaFApYlV0sd4NSJ_Cba59IfZRQ9wSvZyRl2LHdAzwkoKhbSLkZIGf07_G8N8xMNhC8qqhQsz5nUIywrWyJ0sTDq_kQyIGT2e8EgrU2De17YxYl2b2C6zMUEHcigKn_Jeh6dq75HRokgWWZqIa8omf6MgFpaX3VBflauN024RQyN7D53HYVJK83nNIjdOLc4avx4Zxc6LR-hNbmwaMruu8jTr7o8sWBseHwQbXGSdJZjA5sgzV0Bo6iNzK_qTQcufSawJNPvHgbjdEVm8gQcnFFBtxMWhgXN0zAoZXgj6D9x5ddlFtUHmuU7Iz8yr0no8v4mkkoow8OUbTVWmdFZvT0TaeWrEWNMnLmnrAMCHN7Mdko2terKhMrI9C_1cZ_-vZQ9ZPA26AiObBW-EhYYvs1cZl7vxkQe3B0EX2Rp0LI3yAEOdvViA9Y2u10OWX1uNXldIxkW2K6SMupR5E0FFMvrxLF3FBKtbP0l_1KZBVHqavCig");
    this._seoService.updateOGUrl("https://jzon-03.github.io/jasmine-creates/media");
    this._seoService.updateOGDescription("Hello");
  }
}
