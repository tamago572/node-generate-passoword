# https://github.com/tamago572/pyGeneratePassword から
import secrets
import string

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

# lengthがInt型か判定
if length.isdecimal():
    print('1以上の整数が入力されました\n')
    # 記号を含むかを y/nで分岐
    if 'y' in isInstructSymbol:
        print("記号を含む" + length + "桁のパスワードを生成します")
        password = makePassword(int(length), True)

    else:
        print("記号を含まない" + length + "桁のパスワードを生成します")
        password = makePassword(int(length), False)

    print(password)

else:
    print("1以上の整数を入力してください")