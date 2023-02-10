import { ImageList, ImageListItem, Typography } from "@mui/material";
import { useState } from "react";
import "../../Assests/Tabs.scss";
import HeliPhotos from "./HeliPhotos";
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
                  Nepal is one of the world's most spectacular destinations for
                  trekking and mountaineering. The Annapurna Base Camp, also
                  known as Annapurna Sanctuary, is a popular trekking
                  destination for its breathtaking scenery, rich cultural
                  heritage, and natural beauty. The base camp is located in the
                  heart of the Annapurna Conservation Area and provides
                  breathtaking views of the Himalayas, including the iconic
                  Annapurna South and the Machhapuchhre (Fishtail) peaks. But if
                  you're short on time or prefer a more luxurious experience,
                  the Annapurna Base Camp Helicopter Tour is the perfect option.
                  This tour offers an exciting, once-in-a-lifetime opportunity
                  to explore the beauty of the Annapurna region from above. With
                  the helicopter tour, you can avoid the physically demanding
                  trek and still enjoy the stunning scenery and natural beauty
                  of the Annapurna Base Camp. The Annapurna Base Camp Helicopter
                  Tour begins in Kathmandu and takes you on a scenic flight over
                  the lush, green forests and rolling hills of the region.
                  You'll pass over the Himalayas, including some of the world's
                  highest peaks, and get a glimpse of the local culture and
                  traditions of the mountain people. Once you arrive at the
                  Annapurna Base Camp, you'll be able to explore the area and
                  take in the breathtaking views of the Himalayas. You'll be
                  able to experience the natural beauty and serenity of the base
                  camp, surrounded by towering peaks and surrounded by
                  snow-capped mountains. The Annapurna Base Camp Helicopter Tour
                  is perfect for those who want to experience the beauty of the
                  Himalayas without the strenuous trek. Whether you're an
                  adventure-seeker or just looking for a luxurious and memorable
                  experience, this tour is sure to be the highlight of your time
                  in Nepal. So what are you waiting for? Book your Annapurna
                  Base Camp Helicopter Tour today and experience the beauty of
                  the Himalayas from above!
                </p>
                <br />
                <p>
                  Annapurna Base Camp is a popular trekking destination in the
                  Annapurna region of Nepal. There are several trekking routes
                  that lead to the Annapurna Base Camp, which is located at an
                  altitude of 4130 meters. If you prefer to take a helicopter
                  ride, there are many tour operators in Nepal that offer
                  Annapurna Base Camp helicopter tours. The helicopter tour
                  typically starts in Kathmandu and flies over the stunning
                  mountain scenery to Annapurna Base Camp, where you can spend a
                  few hours exploring the area and taking in the views. The
                  flight duration from Kathmandu to Annapurna Base Camp is
                  approximately 30 minutes to an hour. It's important to note
                  that helicopter tours are weather dependent, and the flight
                  may be cancelled or rescheduled if the weather conditions are
                  not suitable.
                </p>
                <br />
                <p>
                  Additionally, the cost of a helicopter tour to Annapurna Base
                  Camp can be relatively expensive compared to other forms of
                  transportation. However, for those who want a faster and more
                  convenient way to reach the base camp, a helicopter tour is a
                  great option.
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
                  Annapurna Base Camp Helicopter accommodation refers to a type
                  of accommodation option for travelers visiting the Annapurna
                  Base Camp, which is a popular trekking destination in the
                  Himalayas. In this option, travelers take a helicopter ride
                  from Pokhara to Annapurna Base Camp, and stay in a lodge or
                  tent for the night. This type of accommodation is ideal for
                  those who are looking for an easier and quicker way to reach
                  the base camp, without having to undertake the strenuous
                  trekking journey. The helicopter ride offers breathtaking
                  views of the surrounding peaks and glaciers, and the
                  accommodation options provide a comfortable and memorable
                  experience for travelers.
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
                  The Annapurna Base Camp helicopter route is a popular way for
                  trekkers and adventurers to reach the Annapurna Base Camp in
                  Nepal. The route starts from Kathmandu and involves flying
                  over stunning mountain ranges, rivers, and glaciers.
                </p>
                <p>
                  The flight takes about 40 minutes and offers breathtaking
                  views of the Himalayas. The helicopter will first fly over the
                  capital city of Kathmandu and then head towards the Pokhara
                  city. The flight then moves over the beautiful city of
                  Pokhara, which is the gateway to the Annapurna region. From
                  here, the helicopter will fly over the lush green forests and
                  the snow-capped mountains of the Annapurna range.
                </p>
                <p>
                  The final destination is the Annapurna Base Camp, which is
                  located at an altitude of 4,130 meters. The helicopter will
                  land on a small helipad at the base camp, and travelers can
                  enjoy the stunning views of the mountains and the glaciers.
                </p>
                <p>
                  After spending some time at the base camp, the helicopter will
                  take the same route back to Kathmandu. The Annapurna Base Camp
                  helicopter route is an excellent way to reach the base camp
                  without having to go through the long and strenuous trek. It
                  is ideal for travelers who want to experience the beauty of
                  the Himalayas in a short amount of time.
                </p>
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
