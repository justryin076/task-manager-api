const sendGrid = require('@sendgrid/mail');

sendGrid.setApiKey(process.env.SEND_GRID_KEY);

const welcomeMail = async function (userEmail) {
    await sendGrid.send({
        from: 'justryin076@qortu.com',
        to: userEmail,
        subject: 'Welcome to Task Manager',
        text: `Thanks for choosing(${userEmail}) Task Manager, we hope you enjoy it`
    });
}

module.exports = welcomeMail