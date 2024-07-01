from flask import render_template, request, redirect, current_app, send_file
from application import app, db, mail
from application.models import Client
from flask_mail import Message


@app.route("/")
def index():
    if request.method == "GET":
        return render_template("index.html", name="portfolio")


@app.route("/client-form", methods=["POST", "GET"])
def client_form():
    if request.method == "POST":
        name = request.form.get("name")
        email = request.form.get("email")
        subject = request.form.get("subject")
        message = request.form.get("message")

        if not name or not email or not subject or not message:
            return redirect("#contact-section")

        new_client = Client(
            name=name,
            email=email,
            subject=subject,
            message=message,
        )

        db.session.add(new_client)
        db.session.commit()
        send_email(new_client)
        return redirect("/")

    return redirect("/")


def send_email(client):
    recipients = app.config["MAIL_USERNAME"].split(",")

    msg = Message(
        "POTENTIAL CLIENT OR JOB OPPORTUNITY",
        sender=current_app.config["MAIL_DEFAULT_SENDER"],
        recipients=recipients,
    )
    msg.body = f"New submit from {client.name} ({client.email}). The subject/s required is/are: {client.subject}\n. Email {client.email} for more information."
    mail.send(msg)


@app.route("/download_cv")
def download_cv():
    return send_file(
        "static/files/babalo_majiyezi_cv.docx",
        as_attachment=True,
        download_name="babalo_majiyezi_cv.docx",
    )
