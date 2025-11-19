// src/app/opera-in-regions/page.tsx
import React from 'react';
import Image from 'next/image';
import './opera-in-regions.css';

// Import the image from the assets folder
import telephoneBannerImg from '../../assets/telephone-banner.jpg'; 

const OperaInRegions: React.FC = () => {
  return (
    <>
      {/* Banner Section */}
      <section className="banner-section">
        <Image 
          src={telephoneBannerImg} 
          alt="Opera Telephone Banner with Georgian Text" 
          className="banner-image"
          
          // 1. PRIORITY: Tells browser to download this first
          priority 
          
          // 2. DECODING SYNC: Forces the browser to draw the image immediately
          // blocking other low-priority tasks. Best for LCP images under 50KB.
          decoding="sync"

          // 3. SIZES: Optimization for responsive width
          sizes="100vw" 
          
          // Note: placeholder="blur" is intentionally REMOVED to stop the fade animation
          
          style={{
            width: '100%',
            height: 'auto',
            objectFit: 'cover'
          }}
        />
      </section>

      {/* Georgian Content */}
      <section className="georgian-section">
        <p>11-დან 24 სექტემბრის ჩათვლით, საქართველოს რეგიონებში მოსახლეობას საოპერო წარმოდგენების ადგილზე მოსმენის შესაძლებლობა ექნება.</p>
        <p>პროექტი &quot;ოპერა რეგიონებში&quot; მიზნად ისახავს საქართველოს რეგიონებში კლასიკური მუსიკის პოპულარიზაციას. პროექტი ემსახურება საოპერო ხელოვნების გაცნობას იმ მოსახლეობისთვის, ვისაც დედაქალაქში ჩამოსვლის და ოპერის თეატრში სპექტაკლებზე დასწრების საშუალება არ აქვს.</p>
        <p>კამერული, ე.წ. სალონური ოპერა საქართველოში სიახლეა. აჭარის, სამეგრელოს, იმერეთის, კახეთის, ქართლის, სამცხე-ჯავახეთის მოსახლეობას საშუალება ექნება ნახოს რეჟისორ ირინა გაჩეჩილაძის მიერ დადგმული კამერული ოპერა - ჯან კარლო მენოტის <span className="opera-title">&quot;ტელეფონი&quot;</span>. ეს ოპერა ახალგაზრდა ქართველმა რეჟისორმა ვენის &quot;ფოლქსთეატრის&quot; მცირე სცენაზე დადგა, მანამდე კი ირინა გაჩეჩილაძის სპექტაკლი ლონდონში &quot;სალონურ ოპერაში&quot; და ბრატისლავაში &quot;ზიჩი პალასში&quot; იყო წარმოდგენილი. სპექტაკლში რამდენიმე მუსიკოსი მონაწილეობს, მათ შორის არიან უცხოეთში მოღვაწე ქართველი მსახიობები და მომღერლები: ვენიდან (ავსტრია) სოპრანო რუსუდან ბარბაქაძე და პიანისტი გიორგი კაჩინსკი, აგრეთვე ჩელისტი ჰეზერ ლესლი ჰოლანდიიდან. საქართველოდან მონაწილეობენ ბარიტონი დიმიტრი შაფაქიძე, მსახიობი ფილიპე გრეჩულევიჩი და ჩელისტი გიორგი კიკაბიძე.</p>
        <p>კამერული ოპერის გარდა, სპექტაკლის მეორე ნაწილში შემსრულებლები ასევე შეასრულებენ საოპერო და კლასიკურ ნაწარმოებებს.</p>
        <p>საოპერო წარმოდგენები რეგიონებში 11 სექტემბრიდან დაიწყება და პირველი სპექტაკლი იქნება ქალაქ ბათუმში, ზაქარია ფალიაშვილის სამუსიკო სკოლის დიდ საკონცერტო დარბაზში. 14 სექტემბერს მუსიკოსები ზუგდიდში გადაინაცვლებენ და ადგილობრივი მოსახლეობის წინაშე მოსწავლე ახალგაზრდობის სასახლეში წარმოადგენენ სალონურ ოპერას. 15 სექტემბერს სპექტაკლი გაიმართება ჭიათურაში, ა. წერეთლის სახელობის დრამატულ თეატრში. შემდეგი ჩვენება 18 სექტემბერს დუისის (პანკისის ხეობა) კულტურის სახლში იქნება. 19 სექტემბერს მუსიკოსები ნიქოზში ჩავლენ და შიდა ქართლის სოფლებიდან დევნილი მოსახლეობისთვის გამართავენ წარმოდგენას კულტურის ცენტრში. კამერული ოპერის ტური რეგიონებში დასრულდება 24 სექტემბერს ახალქალაქში, კულტურის სახლში.</p>
        <p>
          პროექტის ორგანიზატორია <span className="foundation-name">&quot;ფონდი რედლაბი&quot;</span>{" "}
          <a
            href="https://www.redlabproductions.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            redlabproductions.org
          </a>
        </p>
        <p>ჯან კარლო მენოტის კომიკური ოპერა <span className="opera-title">&quot;ტელეფონი&quot;</span> (The Telephone, L&apos;amour à Trois), პირველად დაიდგა ნიუ იორკში 1947 წელს. ის ტექნოლოგიის მზარდი როლის წინასწარმეტყველი აღმოჩნდა. 
        <br /><br />
        ბენი ესტუმრება თავის მეგობარ გოგონას, ლუსის, იმ განზრახვით, რომ ცოლობა სთხოვოს, მაგრამ მისი ყველა მცდელობა როგორმე ჩამოაგდოს ლაპარაკი ამ თემაზე წარუმატებლად მთავრდება, რადგან ლუსი განუწყვეტლივ ლაპარაკობს ტელეფონზე. ბენი ყველაფერს აკეთებს, რომ მიიპყროს ლუსის ყურადღება, მაგრამ ამაოდ. ერთხელ ის ცდილობს &bdquo;შეებრძოლოს&quot; ტელეფონს, როგორც თვითონ ამბობს &bdquo;თავდაცვის მიზნით&quot;. ბოლოს და ბოლოს ის ტოვებს ბინას, გარედან ურეკავს ლუსის და სთხოვს მას ხელს, რაზეც ლუსი თანხმდება.
        <br /><br />
        რეჟისორის მიერ შემოტანილი ინოვაციაა, რომ ტელეფონის როლს ცოცხალი მსახიობი ასრულებს. ასეთი სახით ლონდონში, ვენასა და ბრატისლავაში მის მიერ დადგმულ ოპერას დიდი წარმატება ხვდა წილად.</p>
      </section>

      {/* English Content */}
      <section className="english-section">
        <p>From 11 to 24 September the people in several regions of Georgia will have an ability to listen to an opera production in situ.</p>
        <p>The project &quot;Opera in Regions&quot; aims to popularize classical music in regions of Georgia, in several towns and rural areas, especially among those who are unable to come to Tbilisi and attend a performance in the Opera House.</p>
        <p>They will have an opportunity to listen to Gian Carlo Menotti&apos;s comic opera <span className="opera-title">&quot;The Telephone&quot;</span> (L&apos;amour a Trois) staged by a young Georgian director Irina Gachechildze which she already staged in Volkstheater (Vienna, Austria), and earlier in &quot;Saloon opera&quot; (London) and &quot;Zichy Palace&quot; (Bratislava, Slovakia). Participants are young Georgian artists – Rusudan Barbakadze (soprano) and George Kachinsky who are performing in Vienna, Dimitri Shapakidze (Baritone), Philip Grechulevich (artist), Giorgi Kikabidze (cellist) from Georgia and Heather Leslie (cellist) from the Netherlands.</p>
        <p>Apart of opera in the second part the musicians will perform opera and classic pieces.</p>
        <p>Opera performances will start from September 11, 2019 in Batumi; on September 14 it will be performed in Zugdidi, on September 15 – in Chiatura, on September 18 – in Duisi (Pankisi Gorge), on September 19 – in Nikozi in front of the IDPs from Shida Kartli region and the project will be finished in Akhalkalaki on September 24.</p>
        <p>
          The organizer of the Project is <span className="foundation-name">RedLab Foundation</span>{" "}
          <a
            href="https://www.redlabproductions.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            redlabproductions.org
          </a>
        </p>
        <p>Gian Carlo Menotti&apos;s comic opera <span className="opera-title">&quot;The Telephone&quot;</span> (L&apos;amour a Trois) first performed in 1947, hilariously predicts the increasing role of technology in modern life. Ben visits Lucy at her apartment on a mission to propose to her before he departs on a trip. His attempts to pop the question are foiled by Lucy&apos;s obsession with talking on her telephone. He tries everything to get her attention for long enough to ask for her hand in marriage, including an attempt to cut the phone line, until he decides to beat the telephone at its own game.</p>
      </section>
    </>
  );
};

export default OperaInRegions;