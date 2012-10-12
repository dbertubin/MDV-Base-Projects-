//
//  ViewController.m
//  testApp
//
//  Created by Derek Bertubin on 10/11/12.
//  Copyright (c) 2012 Derek Bertubin. All rights reserved.
//

#import "ViewController.h"

@interface ViewController ()

@end

@implementation ViewController


//Create a function called Add. This function will take two NSInteger or int types and return the result of an addition between these two.
//Create a BOOL function called Compare that takes two NSInteger values. Return YES or NO based on whether the values are equal.
//Create a function called Append. This function will take two NSStrings and return a new NSString containing the appended strings using an NSMutableString and the Append method.
//Call the Append function with two NSStrings. Capture the result and display a UIAlertView with the appended string using displayAlertWithString.
//Create a function called DisplayAlertWithString. This function will take as a parameter an NSString.
//Call the Add function passing in two integer values. Capture the return of this function into a variable.
//Bundle the returned integer into an NSNumber and then convert it to a NSString and pass it to the DisplayAlertWithString function.
//Give it some text for the title. The message will read, "The number is 00". Replace the 00 with the integer passed into the function.
//Call the Compare function with two integer values. If Compare returns YES, display an UIAlertView both with the input values and the result using the DisplayAlertWithString function


//DisplayAlertWithString Function
//Take the passed in NSString and display it in the alert view
//Create an UIAlertView
//  5.  Create a function called DisplayAlertWithString. This function will take as a parameter an NSString.


-(NSString *)DisplayAlertWithString:(NSString* )passedString{
    UIAlertView * alert = [[UIAlertView alloc] initWithTitle:@"DisplayAlertWithString" message:passedString delegate:nil cancelButtonTitle:@"Cancel" otherButtonTitles:@"Next", nil];
    if (alert != nil) {
        [alert show];
    }
    return passedString;
}



/*
-(void)DisplayAlertWithString:(NSString *)alertString {
    UIAlertView * alertView;
    if (alertView != nil) {
        [alertView show];
    }
    [super viewWillAppear:YES];
}
*/


//  1.  Create a function called Add. This function will take two NSInteger or int types and return the result of an addition between these two

-(int)Add:(int *)intA into: (int * )intB{
    if (intA != nil) {                                      //nil check 
        NSLog(@"The first nuber is = %d", (int)intA);
    }
    else {
        NSLog(@"Something faied! with the first integer");
    }
    if (intB != nil) {                                       //nil check
        NSLog(@"The second nuber is = %d", (int)intB);
    }
    else {
        NSLog(@"Something faied! with the first integer");
    }
    int result =  (int)intA + (int)intB;                    // addition intA to intB
    //Bundle the returned integer into an NSNumber and then convert it to a NSString and pass it to the DisplayAlertWithString function.
    NSNumber * newNumber = [[NSNumber alloc] initWithInt: result];
    //convert it to a NSString
    NSString * stringFromNumber = [[NSString alloc] initWithFormat:@"%@",newNumber];
    
    NSLog(@"The numbers added together = %@", stringFromNumber);
    
    return result;
    
}

//  2.  Create a BOOL function called Compare that takes two NSInteger values. Return YES or NO based on whether the values are equal.

-(BOOL)Compare:(NSInteger *)intA comparedTo: (NSInteger * )intB{
    if (intA != nil) {                                      //nil check 
        NSLog(@"The first NSInteger to be compared is %d",  (NSInteger)intA);
    }
    else {
        NSLog(@"Something faied! Check the first integer");
    }
    if (intB != nil) {                                      //nil check
        NSLog(@"The second NSInteger to be compared is %d",  (NSInteger)intB);
    }
    else {
        NSLog(@"Something faied! Check the first integer");
    }
    // Create int to NSString 
    NSString * resultString = [NSString stringWithFormat:@"The numbers are %d and %d", (int)intA, (int)intB];
    
    if ((intA == intB) == YES){                            // BOOL comparsion 
        NSLog(@"The NSIntegers are equal!");
        // If Compare returns YES, display an UIAlertView both with the input values and the result using the DisplayAlertWithString function
        UIAlertView *  alert = [[UIAlertView alloc] initWithTitle:@"Word! thats right, you got this they are equal" message:resultString delegate:nil cancelButtonTitle:@"Cancel" otherButtonTitles:@"Next", nil];
        if (alert != nil) {
            alert.alertViewStyle = UIAlertViewStyleDefault;
            [alert show];
        }
    }
    else {
        NSLog(@"The NSIntegers are not equal!");
    }
    return intA - intB;
}



//  3.  Create a function called Append. This function will take two NSStrings and return a new NSString containing the appended strings using an NSMutableString and the Append method.



- (NSString *)Append:(NSString *) string1 to: (NSString *)string2{
    //    if (string1 != nil && string2 != nil) {               //nil check
    NSMutableString * appendedString = [NSMutableString stringWithFormat:@"%@%@",string1,string2]; // concise
    NSLog(@"%@",appendedString);
    //Capture the result and display a UIAlertView with the appended string using displayAlertWithString.
    UIAlertView * alert = [[UIAlertView alloc]initWithTitle:@"This is the appended string" message:appendedString delegate:nil cancelButtonTitle:@"Cancel" otherButtonTitles:@"Next", nil];
        
    if (alert != nil) {
        alert.alertViewStyle = UIAlertViewStyleDefault;
        [alert show];
    }
        
    return appendedString;
}






- (void)viewDidLoad

{
    [self Add:(int *)4 into:(int *)6];
    //  9.  Call the Compare function with two integer values.
    [self Compare:(NSInteger *)5 comparedTo: (NSInteger * )5];
    //  4.  Call the Append function with two NSStrings.
    [self Append:(NSString *) @"This is the first string" to: (NSString *)@" and this is the second string appended"];
//    [self DisplayAlertWithString:];
    [super viewDidLoad];
}



- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

@end
