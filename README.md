<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h3 align="center">Asuki - Your Forever Soulmate </h3>
  <img src="https://lh3.googleusercontent.com/V9bYMqa1Srnm_3Eq_0zJHMCxz0yYib1K3ytnmsj6cUc2DdyzSyMVbIkPUsb-n70YVSMfLO1YT-ZuM7-K8ZZHRSfq8pkiB0aA6xCOpzPdHQHYkyS9yEmvKgIIwbwtxRoVo8LFQRjI=s244-p-k" alt="logo" width="150">
  <p align="center">
    A puppy adoption platform for Kintamani Balinese Dog Breed

  </p>
</div>

<!-- ABOUT THE PROJECT -->

# About The Project

Derived from my anxiety to illegal dog trading in online groups and offline dog dealer that is lack of awareness of dog healt. Along with my group in Binar Academy, Timo and Wildan, we made this idea come true. Some main features like Authentication, Admin Dashboard, Online Appointment with Kennel Owner are successfully implemented as part of Final Project Challenge Completion. Site is live in https://asuki.netlify.app/

![Home][home]
![Browse][browse]
![Puppy][puppy]
![Error Handling][errorhandling]
![Booking][booking]
![Success][success]
![Profile][profile]
![User's Booking][userbooking]
![Admin User][adminuser]
![Admin Puppy][adminpuppy]
![Admin Booking][adminbooking]
![Admin Pricing][adminpricing]

<p align="right">(<a href="#top">back to top</a>)</p>

## Built With

The following lists show my development stack:

### Frontend Stack

- [NextJS](https://nextjs.org/)
- [SASS](https://sass-lang.com/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Bootstrap](https://react-bootstrap.github.io/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [SwiperJS](https://swiperjs.com/)

### Backend Stack

- [Firebase](https://firebase.google.com/)

### Database

- [Firestore](https://firebase.google.com/docs/firestore)

### Development Tools:

- [Git](https://git-scm.com/)
- [Neovim](https://neovim.io/)

<p align="right">(<a href="#top">back to top</a>)</p>

## What I've learnt?

- `Integrating NextJS and Firebase` => First time working with some of capability in Firebase. Since it is a serverless backend, we're using services provided by Google so we don't have to write a single line of code for backend. I use Firestore as main database (NoSQL), Firebase Auth as user authentication, and Firebase Storage as file management (uploading/retrieving direct link that being used in the app).
- `Redux Toolkit Implementation` => I have worked with `Redux` a few times before this project, but Redux Toolkit was blew my mind. It reduces our effort to write some boilerplate code and make it easy since already bundled with some common package like `Redux Thunk` and `Immer`. The implementation is much easier than I thought, but some of Firebase feature can replace redux functionality especially related to User Authentication.
- `Netlify Deployment` => Free deployment platform nowaday is super helpful. It comes with CI/CD as well. In This project Netlify handle everything smoothly, some configuration may be needed at first but after that. The site is deployed automatically with GitLab merge trigger.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

# Getting Started

## The Feature

- User Authentication using Firebase Auth
- Book Appointment for adopting dog online
- Dedicated Admin space for CRUD of User, Puppy, Booking, and Pricing
- UI that contains Information about the Kennel and the Dogs

## Prerequisites

If you want to edit the code, you need to have `nodejs` and `NPM`.

Install all dependencies by this command if you already get node and npm installed in your system.

```
cd <repository-folder>
npm install
```

<p align="right">(<a href="#top">back to top</a>)</p>

# Usage

- Set your terminal directory to `repository folder`
- Start the Next Server by running this command
  ```
  npm run dev
  ```
- Open `localhost:3000` in your browser

<p align="right">(<a href="#top">back to top</a>)</p>

# Space for Improvement

- Responsive website implementation, still not work as expected
- There's still bugs regarding Firebase Storage, worth to investigate.
- Still slow when doing SSR and retrieving image from Firebase Storage, worth to investigate why

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Sedana Yoga - [@cok_yoga](https://twitter.com/Cok_Yoga)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[home]: docs/images/home.png
[browse]: docs/images/browse.png
[puppy]: docs/images/puppy.png
[errorhandling]: docs/images/error-handling.png
[booking]: docs/images/booking.png
[success]: docs/images/success.png
[profile]: docs/images/profile.png
[userbooking]: docs/images/user-booking.png
[adminuser]: docs/images/admin-user.png
[adminpuppy]: docs/images/admin-puppy.png
[adminbooking]: docs/images/admin-booking.png
[adminpricing]: docs/images/admin-pricing.png
