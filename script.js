// convert pitch names to degrees using switch function
function pitchesSwitchToDegrees(pitchName){
  let convertedChromaticDegree;
  switch(pitchName){
    case "C":
    case "c":
      convertedChromaticDegree = 0;
      break;
    case "C-sharp":
    case "c-sharp":
    case "C sharp":
    case "c sharp":
    case "C#":
    case "c#":
    case "D-flat":
    case "d-flat":
    case "D flat":
    case "d flat":
    case "Db":
    case "db":
      convertedChromaticDegree = 1;
      break;
    case "D":
    case "d":
      convertedChromaticDegree = 2;
      break;
    case "D-sharp":
    case "d-sharp":
    case "D sharp":
    case "d sharp":
    case "D#":
    case "d#":
    case "E-flat":
    case "e-flat":
    case "E flat":
    case "e flat":
    case "Eb":
    case "eb":
      convertedChromaticDegree = 3;
      break;
    case "E":
    case "e":
    case "Fb":
    case "fb":
    case "F-flat":
    case "f-flat":
    case "F flat":
    case "f flat":
      convertedChromaticDegree = 4;
      break;
    case "F":
    case "f":
    case "E#":
    case "e#":
    case "E-sharp":
    case "e-sharp":
    case "E sharp":
    case "e sharp":
      convertedChromaticDegree = 5;
      break;
    case "F-sharp":
    case "f-sharp":
    case "F sharp":
    case "f sharp":
    case "F#":
    case "f#":
    case "G-flat":
    case "g-flat":
    case "G flat":
    case "g flat":
    case "Gb":
    case "gb":
      convertedChromaticDegree = 6;
      break;
    case "G":
    case "g":
      convertedChromaticDegree = 7;
      break;
    case "G-sharp":
    case "g-sharp":
    case "G sharp":
    case "g sharp":
    case "G#":
    case "g#":
    case "A-flat":
    case "a-flat":
    case "A flat":
    case "a flat":
    case "Ab":
    case "ab":
      convertedChromaticDegree = 8;
      break;
    case "A":
    case "a":
      convertedChromaticDegree = 9;
      break;
    case "A-sharp":
    case "a-sharp":
    case "A sharp":
    case "a sharp":
    case "A#":
    case "a#":
    case "B-flat":
    case "b-flat":
    case "B flat":
    case "b flat":
    case "Bb":
    case "bb":
      convertedChromaticDegree = 10;
      break;
    case "B":
    case "b":
    case "C-flat":
    case "c-flat":
    case "C flat":
    case "c flat":
    case "Cb":
    case "cb":
      convertedChromaticDegree = 11;
      break; 
  }
  return convertedChromaticDegree;
}

// convert degrees to pitch names
function chromaticDegreesToPitches(degree){
  let convertedPitchName; 
  switch (degree) {
    case 0:
      convertedPitchName = "C";
      break;
    case 1:
      convertedPitchName = "C-Sharp/D-flat";
      break;
    case 2:
      convertedPitchName = "D";
      break;
    case 3:
      convertedPitchName = "D-sharp/E-flat";
      break;
    case 4:
      convertedPitchName = "E";
      break;
    case 5:
      convertedPitchName = "F";
      break;
    case 6:
      convertedPitchName = "F-sharp/G-flat";
      break;
    case 7:
      convertedPitchName = "G";
      break;
    case 8:
      convertedPitchName = "G-sharp/A-flat";
      break;
    case 9:
      convertedPitchName = "A";
      break;
    case 10:
      convertedPitchName = "A-sharp/B-flat";
      break;
    case 11:
      convertedPitchName = "B";
      break;
  }
  return convertedPitchName;
}

// ensure scale degrees are 0-11
function abs(scaleDegree){
  if (scaleDegree<12){
    return scaleDegree;
  } else{
  //return Math.abs(scaleDegree-12);
  return scaleDegree - 12;
  }
}

/*

  !!!!!SCALES!!!!!

*/

// Object archive containing scales increments as arrays
const scaleLibrary = {
  tetrachord: [2,2,1],
  major: [2,2,1,2,2,2,1],
  naturalMinor: [2,1,2,2,1,2,2],
  harmonicMinor: [2,1,2,2,1,3,1],
  melodicMinor: [2,1,2,2,2,2,1],
  ionianMode: [2,2,1,2,2,2,1]
}
/*
// Library of scale notation pictures
const scaleNotationLibrary = {
	major: {
		0: "images/scales/major/major-scale-c.jpg",
		1: "images/scales/major/major-scale-d-flat.jpg",
		2: "images/scales/major/major-scale-d.jpg",
		3: "images/scales/major/major-scale-e-flat.jpg",
		4: "images/scales/major/major-scale-e.jpg",
		5: "images/scales/major/major-scale-f.jpg",
		6: "images/scales/major/major-scale-f-sharp.jpg",
		7: "images/scales/major/major-scale-g.jpg",
		8: "images/scales/major/major-scale-a-flat.jpg",
		9: "images/scales/major/major-scale-a.jpg",
		10: "images/scales/major/major-scale-b-flat.jpg",
		11: "images/scales/major/major-scale-b.jpg",
	}
	naturalMinor: [],
	harmonicMinor: [],
	melodicMinor: []
}*/

function buildScale(){
  // Get starting note of scale from dropdown
  let root = parseInt(document.getElementById("scaleTonic").value);
  // Get scale quality
  const mode = document.getElementById("scaleType").value;
  // Select appropriate picture of notation
  document.getElementById("scaleGrandStaff").src = scaleNotationLibrary[mode][root];
  // Initiate array to contain scale notes  
  let scale = [chromaticDegreesToPitches(root)];
  // Follow appropriate step increments to build scale  
  for(let i = 0; i < scaleLibrary[mode].length; i++){	    
	  // add next pitch of scale to array
    scale.push(chromaticDegreesToPitches(abs(root + scaleLibrary[mode][i])));
    // increment to next step of scale
	  root = abs(root + scaleLibrary[mode][i]); 
  }  
  // Display complete scale on webpage
  document.getElementById("fullScale").innerHTML = scale;
}
