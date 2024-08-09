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
            }}>චලිතය</h2>
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
              <strong>චලිතය හැඳින්වීම </strong><br />
              චලිතය යනු භෞතික විද්‍යාවේ මූලික සංකල්පයක් වන අතර එය කාලය සමග වස්තුවක පිහිටීමේ වෙනස්වීම විස්තර කරයි. චලිතය අවබෝධ කර ගැනීමේදී දුර, විස්ථාපනය, වේගය, ප්‍රවේගය සහ ත්වරණය යන ප්‍රධාන සංකල්ප කිහිපයක් වැදගත් වේ. මීට අමතරව, චලිත සමීකරණ වස්තු ගමන් කිරීම ගණිතමයව විස්තර කරයි.
            </p>
            <p style={{
              textAlign: 'left',
              margin: '10px 0',
              padding: '10px',
              backgroundColor: '#fff5e1',
              borderRadius: '10px'
            }}>
              <strong>දුර</strong><br />
              දුර යනු වස්තුවක් විසින් ගමන් කළ මුළු පථයේ දිග වේ. එය සෑම විටම ධන අගයකින් යුක්ත වන අතර දිශාව පිළිබඳව සැළකිලිමත් නොවේ.<br />
              <em>උදාහරණයක්:</em> ඔබ මීටර් 3ක් ඉදිරියට ගොස් ආපසු මීටර් 4ක් ගමන් කළ විට, ඔබ ගමන් කළ මුළු දුර 3 + 4 = මීටර් 7 වේ.
            </p>
            <p style={{
              textAlign: 'left',
              margin: '10px 0',
              padding: '10px',
              backgroundColor: '#fff5e1',
              borderRadius: '10px'
            }}>
              <strong>විස්ථාපනය</strong><br />
              විස්ථාපනය යනු වස්තුවක ස්ථානයේ වෙනස්වීම නිරූපණය කරන දෛශික රාශියක් වේ. එහි ප්‍රමාණය සහ දිශාව යන දෙකම අඩංගුව ඇත. එහිදී ආරම්භක ස්ථානයේ සිට අවසන් ස්ථානය දක්වා කෙටිම මාවත මැනේ.<br />
              <em>උදාහරණයක්:</em> ඔබ මීටර් 3ක් ඉදිරියට ගොස් ආපසු මීටර් 4ක් ගමන් කළ විට, ඔබ ගමන් කළ විස්ථාපනය  3 - 4 = මීටර් -1 වේ.
            </p>
            <p style={{
              textAlign: 'left',
              margin: '10px 0',
              padding: '10px',
              backgroundColor: '#fff5e1',
              borderRadius: '10px'
            }}>
              <strong>වේගය</strong><br />
              වේගය යනු වස්තුවක් ඒකක කාලයකදී ගමන්කළ දුර වේ.<br />
              වේගය = දුර / කාලය<br />
              <em>උදාහරණයක්:</em> මෝටර් රථයක් පැය 2කදී කිලෝමීටර් 100ක් ගමන් කළහොත්, එහි වේගය කිලෝමීටර් 100 / පැය 2 = පැයට කිලෝමීටර් 50 වේ.
            </p>
            <p style={{
              textAlign: 'left',
              margin: '10px 0',
              padding: '10px',
              backgroundColor: '#fff5e1',
              borderRadius: '10px'
            }}>
              <strong>ප්‍රවේගය</strong><br />
              ප්‍රවේගය යනු කාලය සමග විස්ථාපනය වෙනස්වීම වේ. එහි වේගය සහ දිශාව යන දෙකම අඩංගු වේ.<br />
              ප්‍රවේගය = විස්ථාපනය / කාලය<br />
              <em>උදාහරණයක්:</em> මෝටර් රථයක් උතුරට කිලෝමීටර් 100ක් පැය 2කදී ගමන් කළහොත්, එහි ප්‍රවේගය උතුරට කිලෝමීටර් 100 / පැය 2 = උතුරට පැයට කිලෝමීටර් 50 වේ.
            </p>
            <p style={{
              textAlign: 'left',
              margin: '10px 0',
              padding: '10px',
              backgroundColor: '#fff5e1',
              borderRadius: '10px'
            }}>
              <strong>ත්වරණය</strong><br />
              ත්වරණය යනු ප්‍රවේගයේ වෙනස්වීමේ සීඝ්‍රතාවය වේ. එය ධනාත්මක (ප්‍රවේගය වැඩිවීම), ඍණාත්මක (ප්‍රවේගය අඩු වීම) හෝ ශුන්‍ය (ස්ථිර ප්‍රවේගය) විය හැක.<br />
              ත්වරණය = ප්‍රවේගයේ වෙනස්වීම / කාලය<br />
              <em>උදාහරණයක්:</em> මෝටර් රථයේ වේගය තත්පර 5ක් තුළ කිලෝමීටර් 0 සිට කිලෝමීටර් 60 දක්වා වැඩිවන්නේ නම්, එහි ත්වරණය 60 / 5 = තත්පර වර්ගයට කිලෝමීටර් 12 වේ.
            </p>
            <p style={{
              textAlign: 'left',
              margin: '10px 0',
              padding: '10px',
              backgroundColor: '#fff5e1',
              borderRadius: '10px'
            }}>
              <strong>චලිත සමීකරණ</strong><br />
              චලිත සමීකරණයන් යෙදිය හැක්කේ නියත ත්වරණයෙන් ගමන් කරන වස්තූන් සදහා වන අතර දිශාව, වේගය, ත්වරණය සහ කාලය අතර සම්බන්ධතාවය විස්තර කරයි.<br />
              1. පළමු චලිත සමීකරණය: v = u + at<br />
              2. දෙවන චලිත සමීකරණය: s = ut + 1/2 at²<br />
              3. තෙවන චලිත සමීකරණය: v² = u² + 2as
            </p>
            <p style={{
              textAlign: 'left',
              margin: '10px 0',
              padding: '10px',
              backgroundColor: '#fff5e1',
              borderRadius: '10px'
            }}>
              <strong>උදාහරණ ගැටලු</strong><br />
              1. <em>උදාහරණ ගැටළුව:</em> මෝටර් රථයක් නිෂ්චලතාවයෙන් (මුලික වේගය u = 0) ගමන් ඇරඹී තත්පර 10කදී තත්පර වර්ගයට මීටර් 2ක ත්වරණයක් ලබා ගතහොත්, අවසාන වේගය කුමක්ද?<br />
              v = u + at<br />
              v = 0 + ( 2 × 10) = තත්පරයට මීටර් 20 <br />
              2. <em>උදාහරණ ගැටළුව:</em> ඉහත උදාහරණයේ මෝටර් රථය කොපමණ දුරක් ගමන් කරයිද?<br />
              s = ut + 1/2 at²<br />
              s = 0 × 10 + 1/2 × 2 × (10)²<br />
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
