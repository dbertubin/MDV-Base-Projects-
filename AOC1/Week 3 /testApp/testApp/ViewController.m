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
    
    NSLog(@"The numbers added together = %d", (int)result);
    
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
    if ((intA == intB) == YES){                            // BOOL comparsion 
        NSLog(@"The NSIntegers are equal!");    
    }
    else {
        NSLog(@"The NSIntegers are not equal!");
    }
    return intA - intB;
}


//  3.  Create a function called Append. This function will take two NSStrings and return a new NSString containing the appended strings using an NSMutableString and the Append method.



- (NSString *)Append:(NSString *) string1 to: (NSString *)string2{
 //   if (string1 != nil && string2 != nil) {               //nil check
        NSMutableString * appendedString = [NSMutableString stringWithFormat:@"%@%@",string1,string2]; // concise
        NSLog(@"%@",appendedString);
        
        return appendedString;
    }


//  5.  Create a function called DisplayAlertWithString. This function will take as a parameter an NSString.

-(void)DisplayAlertWithString:(NSString *)title message:(NSString *)alertMessage cancelButton:(NSString *)cancel {
    UIAlertView *alertView = [[UIAlertView alloc] initWithTitle:title message:alertMessage delegate:nil cancelButtonTitle:cancel otherButtonTitles: nil];
    
    if (alertView != nil) {
        [alertView show];
    }
    [super viewWillAppear:YES];
}



- (void)viewDidLoad

{
    [self Add:(int *)4 into:(int *)6];
    [self Compare:(NSInteger *)5 comparedTo: (NSInteger * )8];
    [self Append:(NSString *) @"This is the first string" to: (NSString *)@" and this is the second string appended"];
    [self DisplayAlertWithString:@"Alert" message:<#(NSString *)#> cancelButton:<#(NSString *)#>]
    
    [super viewDidLoad];
}




//  4.  Call the Append function with two NSStrings. Capture the result and display a UIAlertView with the appended string using displayAlertWithString.




//  6.  Call the Add function passing in two integer values. Capture the return of this function into a variable.




//  7.  Bundle the returned integer into an NSNumber and then convert it to a NSString and pass it to the DisplayAlertWithString function.




//  8.  Give it some text for the title. The message will read, "The number is 00". Replace the 00 with the integer passed into the function.




//  9.  Call the Compare function with two integer values. If Compare returns YES, display an UIAlertView both with the input values and the result using the DisplayAlertWithString function



//*****DisplayAlertWithString Function*****

//  1. Take the passed in NSString and display it in the alert view




//  2. Create an UIAlertView


- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

@end
