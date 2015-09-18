import subprocess
import smtplib
import socket
from email.mime.text import MIMEText
import datetime
import urllib2

import feedparser
import time 

to = 'foxa706@newschool.edu'
gmail_user = 'audrey.michelle.fox@gmail.com'
gmail_pswrd = 'fallSpider2015'	
smtpserver = smtplib.SMTP('smtp.gmail.com', 587)
smtpserver.ehlo()
smtpserver.starttls()
smtpserver.ehlo
smtpserver.login(gmail_user, gmail_pswrd)
today = datetime.date.today()
tw = ""
okc = ""


def prompt(n):
    if n == "Y":
        print"That sucks"
        okc = True
        #run okc mail function
    else:
        bored = raw_input("Well, are you feeling bored? (Y/N)")
        if bored == "Y":
            print"Amuse thyself"
            tw=True
            # run twitter mail
        else:
                print"Get off your computer and go outside."


def mailer1(o):
    if o == True:
        newmails = feedparser.parse("https://" + gmail_user + ":" + gmail_pswrd + "@mail.google.com/gmail/feed/atom").entries
        for i in newmails:		
            if str(i.source)=="OkCupid":		
                print i.summary
                #this is the code to send the emails
                msg['Subject'] = "No need to be lonely"
                msg['From'] = gmail_user
                msg['To'] = to
                msg['Body'] = "You have new OkCupid biz. ;)"
                time.sleep(60)
                smtpserver.sendmail(gmail_user, [to], msg.as_string())
                smtpserver.quit()

def mailer2(t):
    if t == True:
	    newmails = feedparser.parse("https://" + gmail_user + ":" + gmail_pswrd + "@mail.google.com/gmail/feed/atom").entries
            for i in newmails:			
                if str(i.source)=="Twitter":		
                    print i.summary
                    #this is the code to send the emails
                    msg['Subject'] = "Boredom is for Luddites"
                    msg['From'] = gmail_user
                    msg['To'] = to
                    msg['Body'] = "You have new Twitter biz. Enjoy."
                    time.sleep(60)
                    smtpserver.sendmail(gmail_user, [to], msg.as_string())
                    smtpserver.quit()


lonely = raw_input("Are you feeling lonely? (Y/N)")
prompt(lonely)
mailer1(okc)
mailer2(tw)


