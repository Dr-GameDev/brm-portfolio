from application import app, create_db

# Create the database tables
create_db()

if __name__ == '__main__':
    app.run(debug=True)
