
//* background color , card background image , profile photo , nameAndFamily , specialty

let base = {
  // rtl direction for persian and arabic language |  راست چین کردن برای زبان فارسی و عربی
  rtl: 0,
  // name - اسم و فامیل
  name: document.getElementById('name').innerHTML = "Hamid Shahsavani",
  // specialty - تخصص شما
  specialty: document.getElementById('specialty').innerHTML = "Frontend Developer",
  // profile image - تصویر چهره شما
  // sggested image size : 110px x 110px - سایز تصویر پیشنهادی : ۱۱۰ پیکسل در ۱۱۰ پیکسل;
  profileImage: document.getElementById('profile-image').src = "https://raw.githubusercontent.com/sys113/sys113.github.io/main/assets/img/face.jpg",
  // card background - تصویر پس زمینه کارت
  cardBg: document.getElementById('card-bg').src = "https://wallpaperaccess.com/full/6509147.jpg",
  // background color - رنگ پس زمینه
  bgColor: ['#1CB5E0', '#000046'],
  applyChanges(){
    // set background color
    document.getElementById('bg-color').style.background = `linear-gradient(to right, ${this.bgColor})`;
    // set rtl for body
    if(this.rtl) document.body.style.direction = "rtl";
  },
}

base.applyChanges();

// get time in top [only deskop]

document.getElementById("time").innerHTML = Date().slice(16,21);
