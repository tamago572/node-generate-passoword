# https://github.com/tamago572/pyGeneratePassword から
import secrets
import string
import time
# import sys
# data = sys.stdin.readline()
# num=int(data)

def makePassword(length, isInstructSymbol):
    # 英数字のみ
    pass_chars_eisuji = string.ascii_letters + string.digits
    # 記号を含む
    pass_chars_eisuji_kigou = string.ascii_letters + string.digits + string.punctuation

    if isInstructSymbol == True:
        password = ''.join(secrets.choice(pass_chars_eisuji_kigou) for i in range(length))
    else:
        password = ''.join(secrets.choice(pass_chars_eisuji) for i in range(length))

    return password

length = 8 # パスワードの桁数 (Int)
isInstructSymbol = "y" # 記号を含めるかどうか (String) y/N

# (nodejsと連携時にする length.isdecimal() で lengthがInt型か判定 ) lengthが1以上 AND lengthが24以下
if length >= 1 and length <= 24:
    # print('1以上の整数が入力されました\n')
    # 記号を含むかを y/nで分岐
    if 'y' in isInstructSymbol:
        # print("記号を含む" + str(length) + "桁のパスワードを生成します")
        password = makePassword(length, True)

    else:
        # print("記号を含まない" + str(length) + "桁のパスワードを生成します")
        password = makePassword(length, False)

    time.sleep(2)
    print(password)

else:
    # Error
    print("1以上24以下の整数を入力してください")