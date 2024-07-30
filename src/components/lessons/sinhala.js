import React from 'react';
import Image1 from '../../images/lesson/img1.jpg';
import ReactPlayer from 'react-player/youtube';

const english = () => {
  // CSS styles
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end', // Align videos to the bottom
    alignItems: 'center',
    gap: '10px',
    padding: '2px'
  };

  const playerWrapperStyle = {
    position: 'relative',
    paddingTop: '45%', 
    width: '90%', // Adjusted to be responsive
    maxWidth: '600px', // Adjust as needed
    margin: '5px'
  };

  const reactPlayerStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  };

  return (
    <div>
      <div id="lessonEnglish" style={{ backgroundColor: "bisque" }} className="text-center">
        <div className="container">
          <div>
            <h2 style={{
              color: "brown",
              fontFamily: 'Arial, sans-serif',
              fontSize: '28px',
              fontWeight: 'bold',
              padding: '10px'
            }}>ගතිකතාව</h2>
            <img
              src={Image1}
              alt="img1"
              style={{
                borderRadius: "50%",
                height: "40vh",
                marginBottom: "20px",
                marginTop: "20px"
              }}
            />
          </div>
          <div>
            <p style={{
              textAlign: 'left',
              margin: '10px 0',
              padding: '10px',
              backgroundColor: '#fff5e1',
              borderRadius: '10px'
            }}>
              <strong>ගතිකතාවයට හැඳින්වීම</strong><br />
              ගතිකතාව යනු භෞතික විද්‍යා මූලික සංකල්පයක් වන අතර එය කාලය සමග වස්තුවක ස්ථානයේ වෙනස්වීම විස්තර කරයි. ගතිකතාව අවබෝධ කර ගැනීමේදී දුර, ගමන්කල දුර, වේගය, වේගය සහ ත්වරණය යන ප්‍රධාන සංකල්ප කිහිපයක් අඩංගු වේ. එකතුව, ගතිකතා සමීකරණ වස්තු ගමන් කිරීමේ ගණිතමය විස්තර සපයයි.
            </p>
            <p style={{
              textAlign: 'left',
              margin: '10px 0',
              padding: '10px',
              backgroundColor: '#fff5e1',
              borderRadius: '10px'
            }}>
              <strong>දුර</strong><br />
              දුර යනු වස්තුවක් විසින් ගමන් කළ මුළු පථයේ දිග නිරූපණය කරන ස්කේලාර් ප්‍රමාණයක් වේ. එය සෑම විටම ධන අගයකින් යුක්ත වන අතර දිශාව පිළිබඳව ගණනට නොගනියි.<br />
              <em>උදාහරණයක්:</em> ඔබ මීටර් 3ක් ඉදිරියට යන්නට සහ මීටර් 4ක් පසුබැස ගමන් කරන විට, ඔබ ගමන් කළ මුළු දුර 3 + 4 = 7 මීටර් වේ.
            </p>
            <p style={{
              textAlign: 'left',
              margin: '10px 0',
              padding: '10px',
              backgroundColor: '#fff5e1',
              borderRadius: '10px'
            }}>
              <strong>ගමන්කල දුර</strong><br />
              ගමන්කල දුර යනු වස්තුවක ස්ථානයේ වෙනස්වීම නිරූපණය කරන දෘශ්‍යානුපාතික ප්‍රමාණයක් වේ. එය ප්‍රමාණ සහ දිශාව යන දෙකම අඩංගු කර ඇත, මුලික ස්ථානයේ සිට අවසන් ස්ථානය දක්වා කෙටිම මාවත මැනේ.<br />
              <em>උදාහරණයක්:</em> ඔබ මීටර් 3ක් ඉදිරියට යන්නට සහ මීටර් 4ක් පසුබැස ගමන් කරන විට, ඔබගේ ගමන්කල දුර 3 - 4 = -1 මීටර් වේ (ඇණුම දිශාව නිරූපණය කරයි).
            </p>
            <p style={{
              textAlign: 'left',
              margin: '10px 0',
              padding: '10px',
              backgroundColor: '#fff5e1',
              borderRadius: '10px'
            }}>
              <strong>වේගය</strong><br />
              වේගය යනු වස්තුවක් කොපමණ වේගයෙන් ගමන් කරන්නේදැයි මැනීමේ ස්කේලාර් ප්‍රමාණයක් වේ. එය කාලය සමග දුරේ වෙනස්වීමේ අනුපාතය වේ.<br />
              වේගය = දුර / කාලය<br />
              <em>උදාහරණයක්:</em> යතුරු රථයක් පැය 2කදී කිලෝමීටර් 100ක් ගමන් කළහොත්, එහි වේගය කිලෝමීටර් 100 / පැය 2 = පැයට 50 කිලෝමීටර් වේ.
            </p>
            <p style={{
              textAlign: 'left',
              margin: '10px 0',
              padding: '10px',
              backgroundColor: '#fff5e1',
              borderRadius: '10px'
            }}>
              <strong>වේගය</strong><br />
              වේගය යනු කාලය සමග ගමන්කල දුරේ වෙනස්වීමේ අනුපාතය මැනීමේ දෘශ්‍යානුපාතික ප්‍රමාණයක් වේ. එය වේගය සහ දිශාව යන දෙකම අඩංගු වේ.<br />
              වේගය = ගමන්කල දුර / කාලය<br />
              <em>උදාහරණයක්:</em> යතුරු රථයක් උතුරට කිලෝමීටර් 100ක් පැය 2කදී ගමන් කළහොත්, එහි වේගය උතුරට කිලෝමීටර් 100 / පැය 2 = පැයට 50 කිලෝමීටර් වේ.
            </p>
            <p style={{
              textAlign: 'left',
              margin: '10px 0',
              padding: '10px',
              backgroundColor: '#fff5e1',
              borderRadius: '10px'
            }}>
              <strong>තවරණය</strong><br />
              තවරණය යනු වේගයේ වෙනස්වීමේ අනුපාතය මැනීමේ දෘශ්‍යානුපාතික ප්‍රමාණයක් වේ. එය ධනාත්මක (වේගය වැඩිවීම), ඍණාත්මක (වේගය අඩු වීම) හෝ ශුන්‍ය (ස්ථිර වේගය) විය හැක.<br />
              තවරණය = වේගයේ වෙනස්වීම / කාලය<br />
              <em>උදාහරණයක්:</em> යතුරු රථයේ වේගය තත්පර 5ක් තුළ කිලෝමීටර් 0 සිට කිලෝමීටර් 60 දක්වා වැඩිවන්නේ නම්, එහි තවරණය කිලෝමීටර් 60 / තත්පර 5 = තත්පර 12කට කිලෝමීටර් වේ.
            </p>
            <p style={{
              textAlign: 'left',
              margin: '10px 0',
              padding: '10px',
              backgroundColor: '#fff5e1',
              borderRadius: '10px'
            }}>
              <strong>ගතිකතා සමීකරණ</strong><br />
              ගතිකතා සමීකරණයන් සplacementsුන් තවරණයෙන් ගමන් කරන වස්තූන් අතර දිශාව, වේගය, තවරණය සහ කාලය අතර සම්බන්ධතාවය විස්තර කරයි.<br />
              1. පළමු ගතිකතා සමීකරණය: v = u + at<br />
              2. දෙවන ගතිකතා සමීකරණය: s = ut + 1/2 at²<br />
              3. තෙවන ගතිකතා සමීකරණය: v² = u² + 2as
            </p>
            <p style={{
              textAlign: 'left',
              margin: '10px 0',
              padding: '10px',
              backgroundColor: '#fff5e1',
              borderRadius: '10px'
            }}>
              <strong>උදාහරණ ගැටලු</strong><br />
              1. <em>උදාහරණ ගැටළුව 1:</em> යතුරු රථයක් විවේකයෙන් (මුලික වේගය u = 0) ඇරඹී තත්පර 10කදී මීටර්/තත්පර 2ක තවරණයක් ලබා ගතහොත්, අවසාන වේගය කුමක්ද?<br />
              v = u + at<br />
              v = 0 + (මීටර්/තත්පර 2 × තත්පර 10) = මීටර්/තත්පර 20<br />
              2. <em>උදාහරණ ගැටළුව 2:</em> ඉහත උදාහරණයේ යතුරු රථය කොපමණ දුරක් ගමන් කරයිද?<br />
              s = ut + 1/2 at²<br />
              s = 0 × තත්පර 10 + 1/2 × මීටර්/තත්පර 2 × (තත්පර 10)²<br />
              s = 0 + මීටර් 100 = මීටර් 100
            </p>
          </div>
        </div>
        <div>
          <strong>ආශ්‍රිත වීඩියෝ</strong>
          <div style={containerStyle}>
            <div style={playerWrapperStyle}>
              <ReactPlayer style={reactPlayerStyle} url='https://www.youtube.com/watch?v=_hjDLJ1nONU' />
            </div>
            <div style={playerWrapperStyle}>
              <ReactPlayer style={reactPlayerStyle} url='https://www.youtube.com/watch?v=p9XM2bpj-es' />
            </div>
            <div style={playerWrapperStyle}>
              <ReactPlayer style={reactPlayerStyle} url='https://www.youtube.com/watch?v=6M8Tx4WcqSk' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default english;
