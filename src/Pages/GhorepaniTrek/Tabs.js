import { ImageList, ImageListItem, Typography } from "@mui/material";
import { useState } from "react";
import "../../Assests/Tabs.scss";
import HeliPhotos from "./ghorepaniPhotos";

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
                  Ghorepani Poon Hill trek is one of the most popular trekking
                  destinations in Nepal, offering stunning views of the
                  Himalayas and lush forested landscapes. This trek is
                  considered as an easy and short trek, which can be completed
                  in just 4-5 days. The trek starts from Nayapul, a small town
                  located at the base of the Annapurna range and ends at the
                  famous viewpoint of Poon Hill, which is known for its
                  breathtaking views of the sun rising over the peaks of
                  Annapurna South, Annapurna I, Hiunchuli, Machhapuchhre, and
                  Dhaulagiri.
                </p>
                <br />
                <p>
                  As you walk through the lush forests of rhododendrons, oaks,
                  and firs, you will encounter a variety of wildlife such as
                  monkeys, birds, and the occasional deer. The trek will take
                  you through small villages and communities where you can learn
                  about the local culture and lifestyle. The trek is also a
                  great opportunity to interact with the locals, who are warm
                  and friendly, and to sample the delicious local cuisine.
                </p>
                <br />
                <p>
                  One of the highlights of the trek is the visit to the
                  Ghorepani village, which is located on a hill and offers
                  panoramic views of the surrounding landscapes. The trek also
                  passes through the historic Magar village of Ulleri, which is
                  known for its traditional architecture and beautiful terraced
                  fields. As you make your way to Poon Hill, you will encounter
                  several steep inclines and descents, but the views from the
                  top will make all the effort worth it.
                </p>
                <br />
                <p>
                  The trek to Poon Hill is a great choice for those looking for
                  a short and easy trek in Nepal. It is suitable for people of
                  all ages and fitness levels and is a great way to experience
                  the beauty of the Himalayas and the culture of Nepal. Whether
                  you are a seasoned trekker or a first-timer, the Ghorepani
                  Poon Hill trek is a must-do experience. So, pack your bags,
                  grab your camera and head to Nepal for an unforgettable
                  trekking experience.
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

                <img src="./images/adventure/Ghorepani-Poonhill-Trek.jpg" />
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            voluptatum qui adipisci.
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
