console.log('hello objects')

let Mobile = {
      deviceName: 'OppO f11 Ak',
      devicetype: 'Mobile phone',
      devicePrice: 17000,
      deviceMemory: '128 Gb',
      deviceAge: '1 year'
}

let Lappy = {
      deviceName: 'Asus VivoBook 15 Ak',
      devicetype: 'Laptop',
      deviceProcessor: 'Intel i3 8th gen',
      deviceMemorySsd: '256 Gb',
      deviceMemoryHdd: '1 Tb',
      deviceMemoryRam: '8 Gb',
      deviceOperatingSystem: 'Ubuntu',
      devicePrice: 36000,
      deviceAge: '6 months',
}


console.log(Mobile, Mobile.deviceMemory);

console.log('\n');

console.log(Lappy, Lappy.deviceMemorySsd);

console.log('\n');

delete Mobile.devicePrice;
delete Lappy.devicePrice;

let myDigitalDevices = [Mobile, Lappy];
console.log(myDigitalDevices.length, myDigitalDevices);
