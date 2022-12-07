# https://github.com/tamago572/pyGeneratePassword から
import secrets
import string
import pyperclip

def makePassword(length, isSymbol):
    # 英数字のみ
    pass_chars_eisuji = string.ascii_letters + string.digits
    # 記号を含む
    pass_chars_eisuji_kigou = string.ascii_letters + string.digits + string.punctuation

    if isSymbol == True:
        password = ''.join(secrets.choice(pass_chars_eisuji_kigou) for i in range(length))
    else:
        password = ''.join(secrets.choice(pass_chars_eisuji) for i in range(length))

    return password

def copyPassword(password):
    isCopy = input('パスワードをクリップボードにコピーしますか? (y/N)>>>')

    if 'y' in isCopy:
        pyperclip.copy(password)
        print('クリップボードにコピーしました')



length = input('パスワードの桁数を入力してください>>> ')
isSymbol = input('記号を含めますか? (y/N)>>> ')

# inputしたlengthがInt型か判定
if length.isdecimal():
    print('1以上の整数が入力されました\n')
    # 記号を含むか y/nで分岐
    if 'y' in isSymbol:
        print("記号を含む" + length + "桁のパスワードを生成します")
        password = makePassword(int(length), True)

    else:
        print("記号を含まない" + length + "桁のパスワードを生成します")
        password = makePassword(int(length), False)

    print(password)
    copyPassword(password)


else:
    print("1以上の整数を入力してください")