import { ImageList, ImageListItem, Typography } from "@mui/material";
import { useState } from "react";
import "../../Assests/Tabs.scss";
import HeliPhotos from "./PokharaPhotos";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Details
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Pricings
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Photos
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <Typography sx={{ my: 2 }} fontFamily="Sansita" variant="h2">
            Details
          </Typography>
          <div className="details-section">
            <div className="top-section">
              <div className="header">
                <Typography sx={{ my: 2 }} fontFamily="Sansita" variant="h4">
                  overview
                </Typography>
              </div>
              <hr />
              <div className="content-area">
                <p>
                  Muktinath is a sacred Hindu and Buddhist temple located in
                  Mustang, Nepal. The temple is considered one of the most
                  important pilgrimage sites for both religions and attracts
                  thousands of visitors every year.
                </p>
                <br />
                <p>
                  The temple has a rich history, believed to have been
                  established by King Vikramaditya in the first century BC. The
                  temple has been mentioned in several ancient Hindu scriptures
                  and is considered to be a manifestation of Lord Vishnu.
                </p>
                <br />
                <p>
                  The temple complex consists of several shrines, including a
                  108 spout sacred bath and a pagoda-style temple dedicated to
                  Lord Vishnu. Visitors can also visit the nearby Jwala Mai
                  Temple, which is dedicated to the Hindu goddess of fire, and
                  the statue of Lord Shiva.
                </p>
                <br />
                <p>
                  Muktinath is considered one of the most important pilgrimage
                  sites for Hindus and Buddhists. It is believed that a visit to
                  Muktinath can grant salvation and liberation from the cycle of
                  reincarnation. Pilgrims visit the temple to perform puja, take
                  a bath in the sacred waters, and seek blessings from the
                  deity.
                </p>
              </div>
            </div>
            <br />
            <div className="middle-section">
              <div className="header">
                <Typography sx={{ my: 2 }} fontFamily="Sansita" variant="h4">
                  Accomodation
                </Typography>
              </div>
              <hr />
              <div className="content-area">
                <p>
                  There are several options for accommodations during the
                  Ghorepani Poon Hill trek. Some popular options include:
                  <br />
                  <br />
                  Homestays: These are local homes that offer simple but
                  comfortable rooms to trekkers. Homestays are a great way to
                  experience the local culture and cuisine.
                  <br />
                  <br />
                  Teahouses: Teahouses are common along trekking routes in
                  Nepal. They offer basic accommodation and food services to
                  trekkers.
                  <br />
                  <br />
                  Tent camping: For those who prefer more adventure and scenic
                  views, camping is also an option. Trekkers can hire porters to
                  carry their camping gear and set up camp at designated camping
                  sites.
                  <br />
                  <br />
                  Resorts: Some trekkers prefer to stay in more luxurious
                  accommodations. There are several resorts along the Ghorepani
                  Poon Hill trek that offer comfortable rooms and amenities.
                  <br />
                  <br />
                  There are several websites that offer booking services for
                  accommodations along the Ghorepani Poon Hill trek, including
                  Booking.com, Agoda, TripAdvisor, and Nepal Trekking.
                </p>
              </div>
            </div>

            <div className="bottom-section">
              <div className="header">
                <Typography sx={{ my: 2 }} fontFamily="Sansita" variant="h4">
                  Route
                </Typography>
              </div>
              <hr />
              <div className="content-area">
                <p>
                  The Ghorepani Poon Hill trek is a popular trek in the
                  Annapurna region of Nepal. The route usually starts from
                  Nayapul, a small village near Pokhara, and goes through the
                  following places:
                  <br />
                  <br />
                  Nayapul – The starting point of the trek where you will be met
                  by your guide and start the journey towards Ghorepani.
                  <br />
                  <br />
                  Tikhedhunga – A small village on the way to Ghorepani, known
                  for its beautiful terraced fields and stunning views of the
                  Annapurna range.
                  <br />
                  <br />
                  Ulleri – Another small village, located on a steep ascent
                  towards Ghorepani. You will cross a suspension bridge to reach
                  this place.
                  <br />
                  <br />
                  Ghorepani – A beautiful village located at an altitude of
                  2,850 meters, with panoramic views of the Annapurna and
                  Dhaulagiri ranges.
                  <br />
                  <br />
                  Poon Hill – The highlight of the trek, located at an altitude
                  of 3,210 meters. From here, you can get breathtaking views of
                  the Annapurna and Dhaulagiri ranges and the surrounding
                  valleys.
                  <br />
                  <br />
                  Tadapani – A small village located on the way to Ghandruk,
                  from where you will get stunning views of the Annapurna South,
                  Hiunchuli, and Machhapuchhre peaks.
                  <br />
                  <br />
                  Ghandruk – A beautiful village located at an altitude of 1,940
                  meters, known for its traditional Gurung culture and stunning
                  views of the Annapurna range.
                  <br />
                  <br />
                  Nayapul – The final destination of the trek where you will be
                  met by your driver and taken back to Pokhara.
                  <br />
                  The total duration of the trek is usually around 5 to 7 days,
                  depending on your pace and stops along the way. The route is
                  well-marked and well-trodden, making it accessible for
                  trekkers of all levels.
                </p>

                <img
                  src="./images/adventure/Ghorepani-Poonhill-Trek.jpg"
                  alt="trek"
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <Typography sx={{ my: 2 }} fontFamily="Sansita" variant="h2">
            Pricing
          </Typography>
          <p>
            Pricing may differ according to the season. so please contact us through email or phone to know the details regarding Pricing.
            <br/>
            <span><b>Email: </b></span> <b>info@mountainstopadventures.com</b>
            <br/>
            <span> <b> Phone: </b></span> <b>+977-9816652583s</b>
          </p>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <Typography sx={{ my: 2 }} fontFamily="Sansita" variant="h2">
            Photos
          </Typography>
          <ImageList sx={{ height: 450 }} variant="woven" cols={3} gap={8}>
            {HeliPhotos.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=161&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
