import { Component, Input } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrl: './card-player.component.css',
})
export class CardPlayerComponent {
  @Input() mode: 'small' | 'big' = 'small';
  @Input() track: TrackModel = {
    _id: 0,
    name: '',
    album: '',
    url: '',
    cover: '',
  };

  constructor(private multimediaService: MultimediaService) {}

  sendPlay(track: TrackModel): void {
    // console.log('Enviando cancion al reproductor...', track);
    // this.multimediaService.callBack.emit(track);

    //
    this.multimediaService.trackInfo$.next(track);
  }
}
