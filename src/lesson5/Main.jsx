import Swal from 'sweetalert2';

export const Main=()=>{

  const showAlert = () => {
    Swal.fire({
      title: 'ברוך הבא!',
      text: 'זו הודעת SweetAlert2',
      icon: 'success',
      confirmButtonText: 'סגור'
    });
    Swal.fire('נמחק!', 'הפריט נמחק בהצלחה.', 'success')
  };

  return (
    <>
     
      <h1>דוגמה להתראה</h1>
      <button onClick={showAlert}>הצג התראה</button>
</>
  );
}