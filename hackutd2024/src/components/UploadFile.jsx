function PDF() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh' }}>
      <form action="/action_page.php">
        {/* File Input */}
        <input
          type="file"
          id="myFile"
          name="filename"
          multiple
          style={{
            fontSize: '18px', // Make text larger
            padding: '8px',
            marginBottom: '10px',
            marginRight: '10px',
          }}
        />

        {/* Submit Button */}
        <input
          type="submit"
          style={{
            fontSize: '18px', // Make text larger
            padding: '4px 8px', // Add some padding
            cursor: 'pointer',
          }}
        />
      </form>
    </div>
  );
}

export default PDF;
