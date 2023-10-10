import React from 'react';
import { Howl } from 'howler';
import { FaPlay, FaPause, FaForward, FaBackward } from 'react-icons/fa';
import './Estilos/music-player.css';


class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
      currentTrack: 0,
      sound: null,
      positionX: 0,
      positionY: 0,
      dragging: false,
      currentFileName: ''
    };
  }


  componentWillUnmount() {
    const { sound } = this.state;
    if (sound) {
      sound.unload();
    }
  }

  playTrack = () => {
    const { currentTrack, sound } = this.state;

    // Detener el sonido actual si está reproduciéndose
    if (sound) {
      sound.stop();
      sound.unload();
    }

    const currentFileName = this.props.audioFiles[currentTrack];

    // Crear un nuevo sonido y reproducirlo
    const newSound = new Howl({
      src: [this.props.audioFiles[currentTrack]],
      onend: () => {
        this.playNextTrack();
      },
    });

    newSound.play();

    this.setState({
      sound: newSound,
      isPlaying: true,
      currentFileName: currentFileName,
    });
  };


  togglePlay = () => {
    const { isPlaying, sound } = this.state;
    if (isPlaying) {
      sound.pause();
    } else {
      if (!sound) {
        this.playTrack();
      } else {
        sound.play();
      }
    }

    this.setState({
      isPlaying: !isPlaying,
    });
  };

  playPreviousTrack = () => {
    const { currentTrack } = this.state;
    const newTrack = (currentTrack - 1 + this.props.audioFiles.length) % this.props.audioFiles.length;
    this.setState({
      currentTrack: newTrack,
    }, () => {
      this.playTrack();
    });
  };

  playNextTrack = () => {
    const { currentTrack } = this.state;
    const newTrack = (currentTrack + 1) % this.props.audioFiles.length;
    this.setState({
      currentTrack: newTrack,
    }, () => {
      this.playTrack();
    });
  };

  onMouseDown = (e) => {
    const offsetX = e.clientX - this.state.positionX;
    const offsetY = e.clientY - this.state.positionY;
    this.setState({ offsetX, offsetY, dragging: true });

    document.addEventListener('mousemove', this.onMouseMove);
    document.addEventListener('mouseup', this.onMouseUp);
  };

  onMouseMove = (e) => {
    if (this.state.dragging) {
      const positionX = e.clientX - this.state.offsetX;
      const positionY = e.clientY - this.state.offsetY;
      this.setState({ positionX, positionY });
    }
  };

  onMouseUp = () => {
    this.setState({ dragging: false });

    document.removeEventListener('mousemove', this.onMouseMove);
    document.removeEventListener('mouseup', this.onMouseUp);
  };


  // Resto del código del componente (métodos playTrack, playNextTrack, etc.)

  render() {
    const { isPlaying, positionX, positionY, dragging, currentFileName } = this.state;
    const style = {
      transform: `translate(${positionX}px, ${positionY}px)`,
      cursor: dragging ? 'grabbing' : 'grab',
      position: 'fixed',
      top: '75%',
      right: '10%',
    };

    return (
      <div className="music-player" style={style} onMouseDown={this.onMouseDown}>
        <h4 className='music-player-titulo'>PLAYLIST</h4>
        <div className="controls">
          <button onClick={this.playPreviousTrack}>
            <FaBackward />
          </button>
          <button onClick={this.togglePlay}>
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <button onClick={this.playNextTrack}>
            <FaForward />
          </button>
        </div>
        <div className="song-info">
          <span>{currentFileName}</span>
        </div>
      </div>
    );
  }
}

export default MusicPlayer;