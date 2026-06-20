import requests
import smtplib;
'''
location={
    'q':'hanoi',
    'apikey':'c7055ce01673bc05bf8af1cb09e60bd2'
}
request=requests.get('https://api.openweathermap.org/data/2.5/weather',params=location)
data=request.json()
print(data['weather'][0]['main'])'''

myMail='lekhanhminh315@gmail.com'
myPassword='ygsi jmlz etlb wstn'
connection=smtplib.SMTP('smtp.gmail.com')
connection.starttls()
connection.login(user=myMail,password=myPassword)
connection.sendmail(
    from_addr=myMail,
    to_addrs='khanhminh3006@gmail.com',
    msg='hello'
)
connection.close()
print('sent')