export function makeId(length = 6) {
  var txt = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return txt;
}

export function getRandomIntInclusive(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

export function delay(ms = 1500) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export function getDate(date: Date | undefined) {
  if (date) {
    const yyyy: number = date.getFullYear();
    let MM: number | string = date.getMonth() + 1;
    let dd: number | string = date.getDate();
    if (dd < 10) {
      dd = "0" + dd;
    }

    if (MM < 10) {
      MM = "0" + MM;
    }

    return `${dd}/${MM}/${yyyy}`;
  }
}

export function hasNonEmptyValues(
  object: Dictionary,
  fidesToIgnore?: string[]
): boolean {
  for (const key in object) {
    if (typeof object[key] !== "object") {
      if (fidesToIgnore && fidesToIgnore.includes(key)) {
        continue;
      }
      if (
        typeof object[key] === "string" &&
        object[key] !== "" &&
        object[key] !== "-"
      ) {
        continue;
      } else if (typeof object[key] === "number" && object[key] !== 0) {
        continue;
      } else {
        return false;
      }
    } else {
      const nestedObjectNotEmpty = hasNonEmptyValues(
        object[key],
        fidesToIgnore
      );
      if (!nestedObjectNotEmpty) {
        return false;
      }
    }
  }
  return true;
}
