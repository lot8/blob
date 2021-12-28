AFRAME.registerComponent('registerevents', {
		init: function () {

			const marker = this.el;

			marker.addEventListener("markerFound", ()=> {
				var markerId = marker.id;
					console.log('markerFound', markerId);

if(markerId=='1')
				{
					console.log('you found the sound');

				var sceneEl = document.querySelector('a-scene');

					sceneEl.querySelector('#thesound').components.sound.playSound();
				}



if(markerId=='2')
				{
					console.log('you found the sound')


				var sceneEl = document.querySelector('a-scene');

					sceneEl.querySelector('#thesound1').components.sound.playSound();
				}



if(markerId=='3')
				{
					console.log('you found the sound');

var sceneEl = document.querySelector('a-scene');

sceneEl.querySelector('#thesound3').components.sound.playSound();

var sceneEl = document.querySelector('#vclip').play();
					
				}

if(markerId=='4')
				{
					console.log('you found the sound')


				var sceneEl = document.querySelector('a-scene');

					sceneEl.querySelector('#thesound2').components.sound.playSound();
				}



			});






			marker.addEventListener("markerLost",() =>{
				var markerId = marker.id;
				console.log('markerLost', markerId);

if(markerId=='1')
				{

				var sceneEl = document.querySelector('a-scene');

	if(sceneEl.querySelector('#thesound').components.sound.isPlaying==true){
		sceneEl.querySelector('#thesound').components.sound.stopSound();
				console.log("Stop the sound");}}


if(markerId=='2')
				{

				var sceneEl = document.querySelector('a-scene');

	if(sceneEl.querySelector('#thesound1').components.sound.isPlaying==true){
		sceneEl.querySelector('#thesound1').components.sound.stopSound();
				console.log("Stop the sound");}}




if(markerId=='3')
				{
					console.log('you found the sound');

var sceneEl = document.querySelector('a-scene');

sceneEl.querySelector('#thesound3').components.sound.pauseSound();

				
var sceneEl = document.querySelector('#vclip').pause();



					
				}


if(markerId=='4')
				{

				var sceneEl = document.querySelector('a-scene');

	if(sceneEl.querySelector('#thesound2').components.sound.isPlaying==true){
		sceneEl.querySelector('#thesound2').components.sound.stopSound();
				console.log("Stop the sound");}}





			});






		},
	});
